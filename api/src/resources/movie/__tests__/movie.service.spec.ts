/**
 * @packageDocumentation
 * @category Test
 */

// #region import
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { ThrottlerStorage } from '@nestjs/throttler';
import { AxiosResponse } from 'axios';
import { ConfigServiceMock } from 'Entain/common/__mocks__/config-service';
import { EntainErrorMock } from 'Entain/common/__mocks__/error';
import { HttpServiceMock } from 'Entain/common/__mocks__/http-service';
import { EntainError } from 'Entain/config/error';
import { MovieListCategoryEnum } from 'Entain/resources/movie/dto/list-movies.input';
import { MovieService } from 'Entain/resources/movie/movie.service';
import { movieDetailsStub, movieListResponseStub, movieSearchResponseStub } from 'Entain/resources/movie/stubs/movie.stubs';
import { of } from 'rxjs';
// #endregion

describe('MovieService', () => {
  let movieService: MovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MovieService,
        { provide: 'THROTTLER:MODULE_OPTIONS', useValue: {} },
        { provide: ThrottlerStorage, useValue: {} },
        { provide: ConfigService, useValue: ConfigServiceMock },
        { provide: HttpService, useValue: HttpServiceMock },
        { provide: EntainError, useValue: EntainErrorMock },
      ],
    }).compile();

    movieService = module.get<MovieService>(MovieService);
  });

  it('should be defined', () => expect(movieService).toBeDefined());

  describe('list', () => {
    const response: AxiosResponse<unknown, any> = {
      data: movieListResponseStub(),
      headers: {},
      config: {
        url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        headers: undefined
      },
      status: 200,
      statusText: 'OK',
    };

    beforeEach(() => {
      HttpServiceMock.get.mockReturnValue(of(response))
    });

    it('should fetch data from API', async () => {
      const result = await movieService.list({ page: 1, category: MovieListCategoryEnum.NowPlaying });
      expect(result).toEqual(movieListResponseStub());
      expect(HttpServiceMock.get).toHaveBeenCalledWith(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        expect.objectContaining({
          headers: {
            accept: 'application/json',
            Authorization: expect.stringMatching(/^Bearer /)
          },
        }),
      );
    });
  });

  describe('search', () => {
    const response: AxiosResponse<unknown, any> = {
      data: movieSearchResponseStub(),
      headers: {},
      config: {
        url: 'https://api.themoviedb.org/3/search/movie?query=test&include_adult=false&language=en-US&page=1',
        headers: undefined
      },
      status: 200,
      statusText: 'OK',
    };

    beforeEach(() => {
      HttpServiceMock.get.mockReturnValue(of(response))
    });

    it('should fetch data from API', async () => {
      const result = await movieService.search({ query: 'test', page: 1 });
      expect(result).toEqual(movieSearchResponseStub());
      expect(HttpServiceMock.get).toHaveBeenCalledWith(
        'https://api.themoviedb.org/3/search/movie?query=test&include_adult=false&language=en-US&page=1',
        expect.objectContaining({
          headers: {
            accept: 'application/json',
            Authorization: expect.stringMatching(/^Bearer /)
          },
        }),
      );
    });
  });

  describe('findById', () => {
    const response: AxiosResponse<unknown, any> = {
      data: movieDetailsStub(),
      headers: {},
      config: {
        url: 'https://api.themoviedb.org/3/movie/1',
        headers: undefined
      },
      status: 200,
      statusText: 'OK',
    };

    beforeEach(() => {
      HttpServiceMock.get.mockReturnValue(of(response))
    });

    it('should fetch data from API', async () => {
      const result = await movieService.findById(1);
      expect(result).toEqual(movieDetailsStub());
      expect(HttpServiceMock.get).toHaveBeenCalledWith(
        'https://api.themoviedb.org/3/movie/1',
        expect.objectContaining({
          headers: {
            accept: 'application/json',
            Authorization: expect.stringMatching(/^Bearer /)
          },
        }),
      );
    });
  });
});
