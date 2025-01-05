/**
 * @packageDocumentation
 * @category DTO
 */

// #region import
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';
import { handleStrings } from 'Entain/common/transformers/string.transformer';
//#endregion

export class QueryMoviesInput {
  @ApiPropertyOptional({ default: 1 })
  @IsOptional()
  @IsInt()
  @Min(1, { message: 'Page must be greater than 0' })
  page: number;

  @ApiPropertyOptional({ nullable: true, default: 'en-US' })
  @IsOptional()
  @Transform(handleStrings)
  language?: string;

  @ApiPropertyOptional({ nullable: true, description: 'ISO-3166-1 code' })
  @IsOptional()
  @Transform(handleStrings)
  region?: string;
}
