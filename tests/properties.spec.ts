import { errorMessage } from '#constants/messages.ts';
import type { HttpResponse } from '#types/http-client.ts';
import { describe, expect, it, vi } from 'vitest';
import service from '../src/properties/service.ts';
import type { Property } from '../src/properties/types.ts';
import server from '../src/server.ts';

describe('/properties', () => {
  it('returns a list of properties', async () => {
    // assemble
    const response = await server.inject({
      method: 'GET',
      url: '/properties'
    });

    // act
    const properties = response.json() as HttpResponse<Property[]>;

    // assert
    expect(response.statusCode).toBe(200);
    expect(properties.data.length).toEqual(10);
  });

  it('returns an error message when service throws an error', async () => {
    // assemble
    const error = new Error("Database connection failed.");
    vi.spyOn(console, 'error').mockImplementation(vi.fn());
    vi.spyOn(service, 'getProperties').mockRejectedValueOnce(error);
    const response = await server.inject({
      method: 'GET',
      url: '/properties',
    });

    // act
    const result = response.json() as { message: string };

    // assert
    expect(response.statusCode).toBe(500);
    expect(result.message).toBe(errorMessage);
  });
});
