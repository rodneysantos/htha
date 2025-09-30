import json from "../../data/properties.json" with { type: "json" };
import type { Property } from './types.ts';

const mockData: Property[] = json;

async function getProperties() {
  return mockData;
}

export default { getProperties }
