/**
 * @packageDocumentation
 * @category Stub
 */

// #region import
import { ListMoviesResponse } from 'Entain/resources/movie/dto/list-movies.response';
import { SearchMoviesResponse } from 'Entain/resources/movie/dto/search-movies.response';
import { Movie } from 'Entain/resources/movie/entities/movie.entity';
import { MovieDetails } from 'Entain/resources/movie/entities/movie-details.entity';
//#endregion

export const moviesStub = (): Movie[] => [movieStub()];

export const movieStub = (): Movie => ({
  id: 1,
  title: 'Movie Test 2',
  overview: 'test Line',
  release_date: '2024-01-01',
  poster_path: 'https://image.tmdb.org/t/p/w500/test.jpg',
  backdrop_path: 'https://image.tmdb.org/t/p/w500/test.jpg',
  vote_average: 1,
  vote_count: 1,
  adult: false,
  video: false,
  original_language: 'en',
  original_title: 'Movie Test 2',
  genre_ids: [1, 2, 3],
  popularity: 1,
});

export const movieDetailsStub = (): MovieDetails => ({
  ...movieStub(),
  belongs_to_collection: null,
  budget: 1,
  genres: [],
  homepage: null,
  imdb_id: 'tt1234567890',
  origin_country: [],
  production_companies: [],
  production_countries: [],
  revenue: 1,
  runtime: 1,
  spoken_languages: [],
  status: 'Released',
  tagline: 'Test Tagline',
});

export const movieSearchResponseStub = (): SearchMoviesResponse => ({
  results: moviesStub(),
  page: 1,
  total_pages: 5,
  total_results: 100
});

export const movieListResponseStub = (): ListMoviesResponse => ({
  ...movieSearchResponseStub(),
  dates: {
    maximum: '2024-01-01',
    minimum: '2024-01-01',
  },
});

export const moviesGetManyAndCountStub = () => [moviesStub(), moviesStub().length];
