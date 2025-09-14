import { MailService } from '@sendgrid/mail';

let mailService: MailService | null = null;

interface EmailParams {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  text?: string;
  html?: string;
}

export function isEmailEnabled(): boolean {
  return !!process.env.SENDGRID_API_KEY;
}

function initializeMailService(): MailService | null {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn('SENDGRID_API_KEY not configured - email functionality disabled');
    return null;
  }
  
  if (!mailService) {
    mailService = new MailService();
    mailService.setApiKey(process.env.SENDGRID_API_KEY);
  }
  
  return mailService;
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

export async function sendEmail(params: EmailParams): Promise<boolean> {
  const service = initializeMailService();
  
  if (!service) {
    console.log('Email service not available - message saved but not sent');
    return false;
  }
  
  try {
    const response = await service.send({
      to: params.to,
      from: params.from,
      replyTo: params.replyTo,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    
    console.log('Email sent successfully, SendGrid response:', response[0]?.statusCode);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}