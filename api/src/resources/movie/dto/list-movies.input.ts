/**
 * @packageDocumentation
 * @category DTO
 */

// #region import
import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEnum } from 'class-validator';
import { QueryMoviesInput } from 'Entain/resources/movie/dto/query-movies.input';
//#endregion

export enum MovieListCategoryEnum {
  NowPlaying = 'now_playing',
  Popular = 'popular',
  TopRated = 'top_rated',
  Upcoming = 'upcoming',
}

export class ListMoviesInput extends QueryMoviesInput {
  @ApiProperty({ enum: MovieListCategoryEnum, default: MovieListCategoryEnum.NowPlaying })
  @IsEnum(MovieListCategoryEnum)
  @IsDefined()
  category: MovieListCategoryEnum;
}
