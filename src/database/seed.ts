import env from '#modules/constants/environment.ts';
import { db } from '#modules/database/connection.ts';
import { propertiesTable } from '#modules/database/schema.ts';
import type { Property } from '#modules/properties/types.ts';
import propertiesData from "../../data/properties.json" with { type: "json" };

async function seed() {
  const properties = (propertiesData as Property[]).map(p => {
    return {
      address: p.address,
      description: p.description,
      salePrice: p.salePrice,
    } as typeof propertiesTable.$inferInsert
  });

  await db.insert(propertiesTable).values(properties);
  console.info(`Seeded ${properties.length} properties`);
}

// This runs the seed function on db:up, but not during tests
if (env.node == undefined) {
  seed();
}

export default seed;
