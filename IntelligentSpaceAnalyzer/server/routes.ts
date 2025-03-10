import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRoomSchema } from "@shared/schema";
import { analyzeRoom, generateDesignSuggestions } from "./lib/room-analyzer";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/rooms", async (req, res) => {
    try {
      const roomData = insertRoomSchema.parse(req.body);
      const room = await storage.createRoom(roomData);

      if (roomData.photoFile) {
        const imageBase64 = req.body.photoData;
        const analysis = await analyzeRoom(imageBase64, {
          type: room.type,
          width: room.width,
          length: room.length,
          height: room.height,
          style: room.style,
        });

        await storage.updateRoomAnalysis(room.id, analysis);

        const recommendations = await generateDesignSuggestions(
          room.type,
          room.style,
          room.budget
        );

        await storage.updateRoomRecommendations(room.id, recommendations);
      }

      res.json(room);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'An error occurred';
      res.status(400).json({ error: message });
    }
  });

  app.get("/api/rooms/:id", async (req, res) => {
    try {
      const room = await storage.getRoom(parseInt(req.params.id));
      if (!room) {
        return res.status(404).json({ error: "Room not found" });
      }
      res.json(room);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'An error occurred';
      res.status(500).json({ error: message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}