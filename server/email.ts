import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactEmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(params: ContactEmailParams): Promise<boolean> {
  try {
    const emailContent = `
New contact form submission from your portfolio website:

Name: ${params.name}
Email: ${params.email}
Subject: ${params.subject}

Message:
${params.message}

---
This message was sent from your portfolio website contact form.
You can reply directly to this email to respond to ${params.name}.
`;

    await mailService.send({
      to: 'ybhushan2002@gmail.com', // Your email address
      from: 'ybhushan2002@gmail.com', // Your verified sender email
      replyTo: params.email, // Visitor's email for easy reply
      subject: `Portfolio Contact: ${params.subject}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${params.name}</p>
            <p><strong>Email:</strong> ${params.email}</p>
            <p><strong>Subject:</strong> ${params.subject}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${params.message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent from your portfolio website contact form.<br>
            You can reply directly to this email to respond to ${params.name}.
          </p>
        </div>
      `,
    });

    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    if (error.response && error.response.body) {
      console.error('SendGrid error details:', JSON.stringify(error.response.body, null, 2));
    }
    return false;
  }
}