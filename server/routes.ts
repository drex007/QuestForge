import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEarlyAccessSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for early access signups
  app.post("/api/early-access", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertEarlyAccessSchema.parse(req.body);
      
      // Store the signup in memory
      const newSignup = await storage.createEarlyAccessSignup(validatedData);
      
      res.status(201).json({ 
        message: "Early access signup successful", 
        data: newSignup 
      });
    } catch (error) {
      console.error("Error during early access signup:", error);
      res.status(400).json({ 
        message: "Invalid signup data", 
        error: error.message 
      });
    }
  });

  // Get all early access signups (for admin purposes)
  app.get("/api/early-access", async (req, res) => {
    try {
      const signups = await storage.getAllEarlyAccessSignups();
      res.status(200).json(signups);
    } catch (error) {
      console.error("Error retrieving early access signups:", error);
      res.status(500).json({ 
        message: "Failed to retrieve early access signups", 
        error: error.message 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
