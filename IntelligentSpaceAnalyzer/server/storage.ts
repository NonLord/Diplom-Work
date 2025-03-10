import { rooms, type Room, type InsertRoom } from "@shared/schema";

export interface IStorage {
  createRoom(room: InsertRoom): Promise<Room>;
  getRoom(id: number): Promise<Room | undefined>;
  updateRoomAnalysis(id: number, analysis: any): Promise<Room>;
  updateRoomRecommendations(id: number, recommendations: any): Promise<Room>;
}

export class MemStorage implements IStorage {
  private rooms: Map<number, Room>;
  private currentId: number;

  constructor() {
    this.rooms = new Map();
    this.currentId = 1;
  }

  async createRoom(insertRoom: InsertRoom): Promise<Room> {
    const id = this.currentId++;
    const room: Room = {
      ...insertRoom,
      id,
      analysis: null,
      recommendations: null,
    };
    this.rooms.set(id, room);
    return room;
  }

  async getRoom(id: number): Promise<Room | undefined> {
    return this.rooms.get(id);
  }

  async updateRoomAnalysis(id: number, analysis: any): Promise<Room> {
    const room = this.rooms.get(id);
    if (!room) throw new Error("Room not found");
    
    const updatedRoom = { ...room, analysis };
    this.rooms.set(id, updatedRoom);
    return updatedRoom;
  }

  async updateRoomRecommendations(id: number, recommendations: any): Promise<Room> {
    const room = this.rooms.get(id);
    if (!room) throw new Error("Room not found");
    
    const updatedRoom = { ...room, recommendations };
    this.rooms.set(id, updatedRoom);
    return updatedRoom;
  }
}

export const storage = new MemStorage();
