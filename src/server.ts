import { logger } from '#modules/config/logger.ts';
import env from '#modules/constants/environment.ts';
import fastify, { type FastifyServerOptions } from 'fastify';
import HealthCheckRoute from './health-check/route.ts';
import { getPropertiesRoute, savePropertyRoute } from './properties/route.ts';

const fastifyOptions: FastifyServerOptions = {
  logger: logger[env.node],
  genReqId: () => crypto.randomUUID(),
};
const server = fastify(fastifyOptions);
const routes = [HealthCheckRoute, getPropertiesRoute, savePropertyRoute];
routes.forEach(r => server.route(r));

export default server;
