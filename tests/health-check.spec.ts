import { describe, expect, it } from 'vitest';
import server from '../src/server.ts';

describe('/health-check', () => {
  it('returns status OK', async () => {
    // assemble
    const response = await server.inject({
      method: 'GET',
      url: '/health-check'
    });

    // assert
    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual(expect.objectContaining({ status: 'ok' }));
  });
});
