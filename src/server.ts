import fastify from 'fastify';
import HealthCheckRoute from './health-check/route.ts';

const server = fastify();
const routes = [HealthCheckRoute];
routes.forEach(r => server.route(r));

export default server;
