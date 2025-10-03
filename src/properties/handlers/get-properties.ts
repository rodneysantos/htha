import { INTERNAL_SERVER_ERROR } from '#modules/constants/http-codes.ts';
import { errorMessage } from '#modules/constants/messages.ts';
import { pricePosition } from '#modules/utils/price-position.ts';
import { quartile } from '#modules/utils/quartile.ts';
import type { RouteHandlerMethod } from 'fastify';
import service from "../service.ts";

interface QueryParams {
  suburb?: string;
}

export const getProperties: RouteHandlerMethod = async (request, reply) => {
  const query: QueryParams = request.query;
  request.log.info({ query }, "processing getProperties request");

  try {
    // This is not the ideal way. In real-world, we would calculate median price in DB query itself.
    const salePrices = (await service.getSalePrices()).map(row => row.salePrice);
    // const median = calculateMedianPrice(salePrices);
    const quartiles = quartile(salePrices);
    const results = await service.getProperties(query?.suburb);
    const properties = results.map(property => {
      return {
        ...property,
        salePricePosition: pricePosition(property.salePrice, quartiles.q1, quartiles.q3),
      }
    });

    reply.send({ data: properties });
  } catch (error) {
    request.log.error({ error }, "unable to get properties");
    reply.code(INTERNAL_SERVER_ERROR)
      .send({ message: errorMessage });
  }
}
