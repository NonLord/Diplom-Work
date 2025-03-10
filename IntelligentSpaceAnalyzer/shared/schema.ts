import { pgTable, text, serial, integer, jsonb, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const rooms = pgTable("rooms", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  width: real("width").notNull(),
  length: real("length").notNull(),
  height: real("height").notNull(),
  budget: integer("budget").notNull(),
  style: text("style").notNull(),
  photoUrl: text("photo_url").notNull(),
  analysis: jsonb("analysis"),
  recommendations: jsonb("recommendations"),
});

export const roomStyles = [
  "modern",
  "traditional",
  "minimalist",
  "industrial",
  "scandinavian",
  "bohemian",
  "contemporary",
  "rustic",
] as const;

export const roomTypes = [
  "living_room",
  "bedroom",
  "dining_room",
  "kitchen",
  "office",
  "bathroom",
] as const;

export const insertRoomSchema = createInsertSchema(rooms)
  .extend({
    style: z.enum(roomStyles),
    type: z.enum(roomTypes),
    photoFile: z.instanceof(File).optional(),
  })
  .omit({ id: true, analysis: true, recommendations: true });

export type InsertRoom = z.infer<typeof insertRoomSchema>;
export type Room = typeof rooms.$inferSelect;
