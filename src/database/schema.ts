import { decimal, index, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const propertiesTable = pgTable('properties', {
  id: uuid().primaryKey().unique().defaultRandom(),
  address: text().notNull(),
  suburb: text().notNull(),
  description: text().notNull(),
  salePrice: decimal({ precision: 10, scale: 2, mode: "number" }).notNull(),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
}, (table) => [
  index('suburb_idx').on(table.suburb),
]);
