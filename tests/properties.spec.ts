import { errorMessage } from '#modules/constants/messages.ts';
import service from '#modules/properties/service.ts';
import type { Property } from '#modules/properties/types.ts';
import type { HttpResponse } from '#types/http-client.ts';
import { describe, expect, it, vi } from 'vitest';
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
    const result = response.json();

    // assert
    expect(response.statusCode).toBe(500);
    expect(result.message).toBe(errorMessage);
  });

  it('saves a property', async () => {
    // assemble
    const response = await server.inject({
      method: 'POST',
      url: '/properties',
      body: {
        "address": "17 Bryant Street, Agnes Water, Qld 4677",
        "salePrice": 875000,
        "description": "Welcome to 17 Bryant Street, Agnes Water - a delightful seaside retreat offering uninterrupted ocean views and the ultimate coastal lifestyle. Perfectly positioned just minutes from pristine beaches, this charming cottage is an ideal holiday getaway, investment, or dream home by the sea."
      }
    });

    // act
    const result = response.json();

    // assert
    expect(response.statusCode).toBe(200);
    expect(result.data).toHaveProperty('id');
  });

  it('returns an error message when service.saveProperty throws an error', async () => {
    // assemble
    const error = new Error("Database connection failed.");
    vi.spyOn(console, 'error').mockImplementation(vi.fn());
    vi.spyOn(service, 'saveProperty').mockRejectedValueOnce(error);
    const response = await server.inject({
      method: 'POST',
      url: '/properties',
      body: {
        "address": "17 Bryant Street, Agnes Water, Qld 4677",
        "salePrice": 875000,
        "description": "Welcome to 17 Bryant Street, Agnes Water - a delightful seaside retreat offering uninterrupted ocean views and the ultimate coastal lifestyle. Perfectly positioned just minutes from pristine beaches, this charming cottage is an ideal holiday getaway, investment, or dream home by the sea."
      }
    });

    // act
    const result = response.json();

    // assert
    expect(response.statusCode).toBe(500);
    expect(result.message).toBe(errorMessage);
  });
});
