/**
 * @packageDocumentation
 * @category Entity
 */

// #region import
import { ApiProperty } from '@nestjs/swagger';
// #endregion

export class Movie {
  @ApiProperty({ default: 0 })
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ default: true })
  adult: boolean;

  @ApiProperty()
  backdrop_path?: string;

  @ApiProperty({ type: [Number] })
  genre_ids: number[];

  @ApiProperty()
  original_language: string;

  @ApiProperty()
  original_title: string;

  @ApiProperty()
  overview: string;

  @ApiProperty({ default: 0 })
  popularity: number;

  @ApiProperty({ nullable: true })
  poster_path?: string;

  @ApiProperty()
  release_date: string;

  @ApiProperty({ default: true })
  video: boolean;

  @ApiProperty({ default: 0 })
  vote_average: number;

  @ApiProperty({ default: 0 })
  vote_count: number;
}
