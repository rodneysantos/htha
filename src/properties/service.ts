import json from "../../data/properties.json" with { type: "json" };
import type { Property } from './types.ts';

let mockData: Property[] = json;

async function getProperties() {
  return mockData;
}

async function saveProperty(property: Property) {
  const id = crypto.randomUUID();
  mockData = [...mockData, { id, ...property }];
  return id;
}

export default { getProperties, saveProperty }
