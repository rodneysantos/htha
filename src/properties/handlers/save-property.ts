import { INTERNAL_SERVER_ERROR } from '#modules/constants/http-codes.ts';
import { errorMessage } from '#modules/constants/messages.ts';
import type { RouteHandlerMethod } from 'fastify';
import service from "../service.ts";
import type { Property } from '../types.ts';

export const saveProperty: RouteHandlerMethod = async (request, reply) => {
  const body = request.body as Property;

  try {
    const result = await service.saveProperty(body);
    reply.send({ data: result[0] });
  } catch (error) {
    console.error("unable to save property", { body, error });
    reply.code(INTERNAL_SERVER_ERROR).send({ message: errorMessage });
  }
}
