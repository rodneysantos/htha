import type { NodeEnv } from '#modules/constants/environment.ts';
import type { PinoLoggerOptions } from 'fastify/types/logger.js';

type Logger = {
  [env in NodeEnv]: PinoLoggerOptions | boolean;
}

const logger: Logger = {
  dev: {
    transport: {
      target: 'pino-pretty',
      options: {
        ignore: 'pid,hostname',
      },
    },
  },
  prod: true,
  test: false,
}

export { logger }
