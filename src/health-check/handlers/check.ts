import type { RouteHandlerMethod } from 'fastify';

export const check: RouteHandlerMethod = async (request, reply) => {
  reply.send({
    status: 'ok',
    timestamp: Date.now(),
  });
}
