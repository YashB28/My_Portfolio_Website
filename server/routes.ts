import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      const message = await storage.createContactMessage(validatedData);
      
      // Try to send email notification
      const emailSent = await sendContactEmail({
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message
      });
      
      if (emailSent) {
        console.log("✅ Contact form submission sent via email:", message);
      } else {
        console.log("⚠️  Email sending failed, but message was saved:", message);
        console.log("📧 CONTACT FORM SUBMISSION:");
        console.log(`   From: ${validatedData.name} (${validatedData.email})`);
        console.log(`   Subject: ${validatedData.subject}`);
        console.log(`   Message: ${validatedData.message}`);
        console.log("----------------------------------------");
      }
      
      // Always return success since message is saved
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
