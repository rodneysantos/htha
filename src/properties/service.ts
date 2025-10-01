import { db } from "#modules/database/connection.ts";
import { propertiesTable } from '#modules/database/schema.ts';
import type { Property } from './types.ts';

async function getProperties() {
  const results = await db.select().from(propertiesTable);
  return results;
}

async function saveProperty(property: Property) {
  const result = await db.insert(propertiesTable)
    .values(property)
    .returning({ id: propertiesTable.id });

  return result;
}

export default { getProperties, saveProperty }
