import fastify from 'fastify';
import HealthCheckRoute from './health-check/route.ts';
import { getPropertiesRoute, savePropertyRoute } from './properties/route.ts';

const server = fastify();
const routes = [HealthCheckRoute, getPropertiesRoute, savePropertyRoute];
routes.forEach(r => server.route(r));

export default server;
