import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { sendEmail, isEmailEnabled } from "./sendgrid";
import { z } from "zod";

// Rate limiting map (simple in-memory)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5; // 5 submissions per window

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }
  
  record.count++;
  return true;
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const clientIp = req.ip || req.connection.remoteAddress || 'unknown';
      
      // Check rate limit
      if (!checkRateLimit(clientIp)) {
        return res.status(429).json({
          success: false,
          message: "Trop de tentatives. Veuillez réessayer dans quelques minutes."
        });
      }
      
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Check for honeypot field (not implemented in UI, but good security practice)
      if (req.body.honeypot) {
        console.log('Honeypot triggered:', clientIp);
        return res.json({ success: true, message: "Message envoyé." }); // Don't reveal it's blocked
      }
      
      const message = await storage.createContactMessage(validatedData);
      
      // Send email notification using SendGrid if enabled
      let emailSent = false;
      if (isEmailEnabled()) {
        const contactTo = process.env.CONTACT_TO || "contact@krieger-avocat.com";
        const contactFrom = process.env.CONTACT_FROM || "noreply@krieger-avocat.com";
        
        const textContent = `
Nouveau message de contact reçu:

Nom: ${validatedData.name}
Email: ${validatedData.email}
Téléphone: ${validatedData.phone || 'Non renseigné'}
Domaine juridique: ${validatedData.legalDomain || 'Non spécifié'}

Message:
${validatedData.message}
        `;
        
        const htmlContent = `
<h2>Nouveau message de contact</h2>
<p><strong>Nom:</strong> ${escapeHtml(validatedData.name)}</p>
<p><strong>Email:</strong> ${escapeHtml(validatedData.email)}</p>
<p><strong>Téléphone:</strong> ${escapeHtml(validatedData.phone || 'Non renseigné')}</p>
<p><strong>Domaine juridique:</strong> ${escapeHtml(validatedData.legalDomain || 'Non spécifié')}</p>
<h3>Message:</h3>
<p>${escapeHtml(validatedData.message).replace(/\n/g, '<br>')}</p>
        `;
        
        emailSent = await sendEmail({
          to: contactTo,
          from: contactFrom,
          replyTo: validatedData.email,
          subject: `Nouveau message de contact - ${validatedData.name}`,
          text: textContent,
          html: htmlContent
        });
      }
      
      console.log("New contact message received:", { 
        id: message.id, 
        name: message.name, 
        email: message.email 
      });
      console.log("Email sent:", emailSent);
      
      res.json({ 
        success: true, 
        message: emailSent 
          ? "Votre message a été envoyé avec succès. Nous vous recontacterons dans les plus brefs délais." 
          : "Votre message a été enregistré. Nous vous recontacterons dans les plus brefs délais."
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Données invalides", 
          errors: error.errors 
        });
      }
      
      console.error("Error saving contact message:", error);
      res.status(500).json({ 
        success: false, 
        message: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer." 
      });
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ 
        success: false, 
        message: "Erreur lors de la récupération des messages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
