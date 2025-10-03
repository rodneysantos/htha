import type { RouteHandlerMethod } from 'fastify';

export const check: RouteHandlerMethod = async (request, reply) => {
  request.log.info("processing health check request");
  reply.send({
    status: 'ok',
    timestamp: Date.now(),
  });
}
