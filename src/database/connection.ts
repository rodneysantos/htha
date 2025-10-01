import env from '#modules/constants/environment.ts';
import seed from "#modules/database/seed.ts";
import { PGlite } from '@electric-sql/pglite';
import { drizzle, PgliteDatabase } from 'drizzle-orm/pglite';
import { migrate } from "drizzle-orm/pglite/migrator";

let db: PgliteDatabase<Record<string, never>> & { $client: PGlite };
const isTesting = env.node === 'test';
const dataDir = isTesting ? 'memory://' : './pglite';

if (!db) {
  const client = new PGlite(dataDir);
  db = drizzle({ client, casing: 'snake_case' });

  // Run the migration to create the tables if in test mode
  if (isTesting) {
    await runMigration();
    await seed();
  }
}

async function runMigration() {
  const migrationsFolder = "./src/database/migration";
  await migrate(db, { migrationsFolder });
  console.log("Migration completed");
}

export { db };
