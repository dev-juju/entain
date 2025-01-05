/**
 * @packageDocumentation
 * @category Service
 */

// #region imports
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { EntainError } from 'Entain/config/error';
import { ListMoviesInput } from 'Entain/resources/movie/dto/list-movies.input';
import { ListMoviesResponse } from 'Entain/resources/movie/dto/list-movies.response';
import { SearchMoviesInput } from 'Entain/resources/movie/dto/search-movies.input';
import { SearchMoviesResponse } from 'Entain/resources/movie/dto/search-movies.response';
import { MovieDetails } from 'Entain/resources/movie/entities/movie-details.entity';
import { catchError, firstValueFrom, map } from 'rxjs';
// #endregion

@Injectable()
export class MovieService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    private readonly entainError: EntainError,
  ) { }

  get headers() {
    return {
      accept: 'application/json',
      Authorization: `Bearer ${ this.configService.getOrThrow('TMDB_READ_ACCESS_TOKEN') }`
    };
  }

  /***************************************************** READ *****************************************************/
  async findById(id: number): Promise<MovieDetails> {
    const response = await firstValueFrom(
      this.httpService.get(`https://api.themoviedb.org/3/movie/${ id }`, { headers: this.headers }).pipe(
        map((res: AxiosResponse) => res.data),
        catchError(this.entainError.handleAxiosError)
      )
    );

    return response;
  }

  async list({ page=1, category, language='en-US', region }: ListMoviesInput): Promise<ListMoviesResponse> {
    let url = `https://api.themoviedb.org/3/movie/${ category }?language=${ language }&page=${ page }`;
    if (region) url += `&region=${ region }`;

    const response = await firstValueFrom(
      this.httpService.get(url, { headers: this.headers }).pipe(
        map((res: AxiosResponse) => res.data),
        catchError(this.entainError.handleAxiosError)
      )
    );

    return response;
  }

  async search({ query, page=1, language='en-US', include_adult=false, year, primary_release_year }: SearchMoviesInput): Promise<SearchMoviesResponse> {
    let url = `https://api.themoviedb.org/3/search/movie?query=${ query }&include_adult=${ include_adult }&language=${ language }&page=${ page }`;
    if (year) url += `&year=${ year }`;
    if (primary_release_year) url += `&primary_release_year=${ primary_release_year }`;

    const response = await firstValueFrom(
      this.httpService.get(url, { headers: this.headers }).pipe(
        map((res: AxiosResponse) => res.data),
        catchError(this.entainError.handleAxiosError)
      )
    );

    return response;
  }
}
