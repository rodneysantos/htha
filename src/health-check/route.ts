import type { RouteOptions } from 'fastify';
import { check } from './handlers/check.ts';

const route: RouteOptions = {
  method: 'GET',
  url: '/health-check',
  handler: check,
}

export default route;
