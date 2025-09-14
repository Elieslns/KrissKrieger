import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { sendEmail } from "./sendgrid";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // Send email notification using SendGrid
      const emailSent = await sendEmail({
        to: "contact@krieger-avocat.com", // Replace with actual email
        from: "noreply@krieger-avocat.com", // This must be a verified sender in SendGrid
        subject: `Nouveau message de contact - ${validatedData.name}`,
        text: `
Nouveau message de contact reçu:

Nom: ${validatedData.name}
Email: ${validatedData.email}
Téléphone: ${validatedData.phone || 'Non renseigné'}
Domaine juridique: ${validatedData.legalDomain || 'Non spécifié'}

Message:
${validatedData.message}
        `,
        html: `
<h2>Nouveau message de contact</h2>
<p><strong>Nom:</strong> ${validatedData.name}</p>
<p><strong>Email:</strong> ${validatedData.email}</p>
<p><strong>Téléphone:</strong> ${validatedData.phone || 'Non renseigné'}</p>
<p><strong>Domaine juridique:</strong> ${validatedData.legalDomain || 'Non spécifié'}</p>
<h3>Message:</h3>
<p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        `
      });
      
      console.log("New contact message received:", message);
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
