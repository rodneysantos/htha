import { db } from "#modules/database/connection.ts";
import { propertiesTable } from '#modules/database/schema.ts';
import { eq } from 'drizzle-orm';
import type { Property } from './types.ts';

async function getProperties(sub?: string) {
  let query = db.select().from(propertiesTable).$dynamic();

  if (sub) {
    query = query.where(eq(propertiesTable.suburb, sub.toLowerCase()));
  }

  const results = await query;

  return results;
}

async function saveProperty(property: Property) {
  const suburb = property.address.split(',')[1].trim().toLowerCase();
  const p: Property = { ...property, suburb };
  const result = await db.insert(propertiesTable)
    .values(p)
    .returning({ id: propertiesTable.id });

  return result;
}

export default { getProperties, saveProperty }
