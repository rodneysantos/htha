import type { RouteOptions } from 'fastify';
import { getProperties } from './handlers/get-properties.ts';
import { saveProperty } from './handlers/save-property.ts';

const getPropertiesRoute: RouteOptions = {
  method: 'GET',
  url: '/properties',
  handler: getProperties
}

const savePropertyRoute: RouteOptions = {
  method: 'POST',
  url: '/properties',
  handler: saveProperty,
}

export { getPropertiesRoute, savePropertyRoute };
