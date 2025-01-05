/**
 * @packageDocumentation
 * @category DTO
 */

// #region import
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { Movie } from 'Entain/resources/movie/entities/movie.entity';
//#endregion

export class SearchMoviesResponse {
  @ApiProperty({ type: [Movie!] })
  results: Movie[];

  @ApiProperty({ default: 0 })
  @IsNumber()
  page: number;

  @ApiProperty({ default: 0 })
  @IsNumber()
  total_pages: number;

  @ApiProperty({ default: 0 })
  @IsNumber()
  total_results: number;
}
