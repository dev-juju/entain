/**
 * @packageDocumentation
 * @category Mock
 */

//#region import
import { movieDetailsStub, movieListResponseStub, movieSearchResponseStub } from 'Entain/resources/movie/stubs/movie.stubs';
//#endregion

export const MovieService = jest.fn().mockReturnValue({
  findById: jest.fn().mockResolvedValue(movieDetailsStub()),
  list: jest.fn().mockResolvedValue(movieListResponseStub()),
  search: jest.fn().mockResolvedValue(movieSearchResponseStub()),
});
