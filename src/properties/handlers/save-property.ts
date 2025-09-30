import { INTERNAL_SERVER_ERROR } from '#constants/http-codes.ts';
import { errorMessage } from '#constants/messages.ts';
import type { RouteHandlerMethod } from 'fastify';
import service from "../service.ts";
import type { Property } from '../types.ts';

export const saveProperty: RouteHandlerMethod = async (request, reply) => {
  try {
    const body = request.body as Property;
    const result = await service.saveProperty(body);
    reply.send({ data: result });
  } catch (error) {
    console.error("unable to get properties", error);
    reply.code(INTERNAL_SERVER_ERROR).send({ message: errorMessage });
  }
}
