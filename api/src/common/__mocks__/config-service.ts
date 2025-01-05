/**
 * @packageDocumentation
 * @category Mock
 */

export const ConfigServiceMock = {
  get: jest.fn(() => Promise.resolve({ TMDB_READ_ACCESS_TOKEN: 'test' })),
  getOrThrow: jest.fn(() => Promise.resolve({ TMDB_READ_ACCESS_TOKEN: 'test' })),
};
