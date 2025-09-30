import type { RouteOptions } from 'fastify';
import { getProperties } from './handlers/get-properties.ts';

const route: RouteOptions = {
  method: 'GET',
  url: '/properties',
  handler: getProperties
}

export default route;
