import { INTERNAL_SERVER_ERROR } from '#modules/constants/http-codes.ts';
import { errorMessage } from '#modules/constants/messages.ts';
import type { RouteHandlerMethod } from 'fastify';
import service from "../service.ts";

interface QueryParams {
  suburb?: string;
}

export const getProperties: RouteHandlerMethod = async (request, reply) => {
  const query: QueryParams = request.query;

  try {
    const properties = await service.getProperties(query?.suburb);
    reply.send({ data: properties });
  } catch (error) {
    console.error("unable to get properties", error);
    reply.code(INTERNAL_SERVER_ERROR).send({ message: errorMessage });
  }
}
