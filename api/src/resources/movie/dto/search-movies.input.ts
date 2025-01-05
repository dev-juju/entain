/**
 * @packageDocumentation
 * @category DTO
 */

// #region import
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';
import { handleBooleans } from 'Entain/common/transformers/boolean.transformer';
import { handleStrings } from 'Entain/common/transformers/string.transformer';
import { QueryMoviesInput } from 'Entain/resources/movie/dto/query-movies.input';
//#endregion

export class SearchMoviesInput extends QueryMoviesInput {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Transform(handleStrings)
  query: string;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  @Transform(handleBooleans)
  include_adult?: boolean;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsString()
  @Matches(/^\d{4}$/)
  @Transform(handleStrings)
  year?: string;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsString()
  @Matches(/^\d{4}$/)
  @Transform(handleStrings)
  primary_release_year?: string;
}
