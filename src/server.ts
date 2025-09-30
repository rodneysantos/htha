import fastify from 'fastify';
import HealthCheckRoute from './health-check/route.ts';
import PropertiesRoute from './properties/route.ts';

const server = fastify();
const routes = [HealthCheckRoute, PropertiesRoute];
routes.forEach(r => server.route(r));

export default server;
