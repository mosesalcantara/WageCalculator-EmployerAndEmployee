import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const wageOrders = sqliteTable("wageOrders", {
  id: integer("id").primaryKey({ autoIncrement: true }).notNull(),
  name: text("name").notNull(),
  date: text("date").notNull(),
  less_than_ten: real("less_than_ten").notNull(),
  ten_or_more: real("ten_or_more").notNull(),
});

export type WageOrders = typeof wageOrders.$inferSelect;
