/**
 * @packageDocumentation
 * @category Entity
 */

// #region import
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Movie } from 'Entain/resources/movie/entities/movie.entity';
// #endregion

class BelongsToCollection {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiPropertyOptional({ nullable: true })
  poster_path?: string;

  @ApiPropertyOptional({ nullable: true })
  backdrop_path?: string;
}

class Genre {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}

class ProductionCompany {
  @ApiProperty()
  id: number;

  @ApiPropertyOptional({ nullable: true })
  logo_path?: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  origin_country: string;
}

class ProductionCountry {
  @ApiProperty()
  iso_3166_1: string;

  @ApiProperty()
  name: string;
}

class SpokenLanguage {
  @ApiProperty()
  english_name: string;

  @ApiProperty()
  iso_639_1: string;

  @ApiProperty()
  name: string;
}

export class MovieDetails extends Movie {
  @ApiPropertyOptional({ type: BelongsToCollection, nullable: true })
  belongs_to_collection?: BelongsToCollection;

  @ApiProperty()
  budget: number;

  @ApiProperty({ type: [Genre] })
  genres: Genre[];

  @ApiPropertyOptional({ nullable: true })
  homepage?: string;

  @ApiProperty()
  imdb_id: string;

  @ApiProperty({ type: [String] })
  origin_country: string[];

  @ApiProperty({ type: [ProductionCompany] })
  production_companies: ProductionCompany[];

  @ApiProperty({ type: [ProductionCountry] })
  production_countries: ProductionCountry[];

  @ApiProperty()
  revenue: number;

  @ApiProperty()
  runtime: number;

  @ApiProperty({ type: [SpokenLanguage] })
  spoken_languages: SpokenLanguage[];

  @ApiProperty()
  status: string;

  @ApiProperty()
  tagline: string;
}
