/**
 * @packageDocumentation
 * @category DTO
 */

// #region import
import { ApiProperty } from '@nestjs/swagger';
import { SearchMoviesResponse } from 'Entain/resources/movie/dto/search-movies.response';
import { ResponseDateObject } from 'Entain/resources/movie/entities/response-date.object';
//#endregion

export class ListMoviesResponse extends SearchMoviesResponse {
  @ApiProperty({ type: ResponseDateObject })
  dates: ResponseDateObject;
}
