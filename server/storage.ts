import { 
  users, 
  type User, 
  type InsertUser, 
  earlyAccessSignups, 
  type EarlyAccess, 
  type InsertEarlyAccess 
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Early access methods
  createEarlyAccessSignup(signup: InsertEarlyAccess): Promise<EarlyAccess>;
  getAllEarlyAccessSignups(): Promise<EarlyAccess[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private earlyAccessSignups: Map<number, EarlyAccess>;
  currentUserId: number;
  currentEarlyAccessId: number;

  constructor() {
    this.users = new Map();
    this.earlyAccessSignups = new Map();
    this.currentUserId = 1;
    this.currentEarlyAccessId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createEarlyAccessSignup(insertSignup: InsertEarlyAccess): Promise<EarlyAccess> {
    const id = this.currentEarlyAccessId++;
    const signup: EarlyAccess = { ...insertSignup, id };
    this.earlyAccessSignups.set(id, signup);
    return signup;
  }
  
  async getAllEarlyAccessSignups(): Promise<EarlyAccess[]> {
    return Array.from(this.earlyAccessSignups.values());
  }
}

export const storage = new MemStorage();
