import * as schema from "@/db/schema";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { SQLiteDatabase } from "expo-sqlite";

export const getDb = (sqlDb: SQLiteDatabase) => drizzle(sqlDb, { schema });
