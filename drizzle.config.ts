import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  driver: 'pglite',
  schema: "./src/database/schema.ts",
  casing: 'snake_case',
  out: "./src/database/migration",
  dbCredentials: {
    url: './pglite',
  }
});
