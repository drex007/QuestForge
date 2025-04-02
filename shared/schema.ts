import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const earlyAccessSignups = pgTable("early_access_signups", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  walletAddress: text("wallet_address").notNull(),
  twitterFollow: boolean("twitter_follow").notNull(),
  newsletter: boolean("newsletter").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertEarlyAccessSchema = createInsertSchema(earlyAccessSignups).pick({
  name: true,
  email: true,
  walletAddress: true,
  twitterFollow: true,
  newsletter: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertEarlyAccess = z.infer<typeof insertEarlyAccessSchema>;
export type EarlyAccess = typeof earlyAccessSignups.$inferSelect;
