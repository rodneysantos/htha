import { INTERNAL_SERVER_ERROR } from '#constants/http-codes.ts';
import { errorMessage } from '#constants/messages.ts';
import type { RouteHandlerMethod } from 'fastify';
import service from "../service.ts";

export const getProperties: RouteHandlerMethod = async (request, reply) => {
  try {
    const properties = await service.getProperties();
    reply.send({ data: properties });
  } catch (error) {
    console.error("unable to get properties", error);
    reply.code(INTERNAL_SERVER_ERROR).send({ message: errorMessage });
  }
}
