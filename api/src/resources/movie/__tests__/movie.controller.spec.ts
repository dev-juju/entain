/**
 * @packageDocumentation
 * @category Test
 */

// #region import
import { Test, TestingModule } from '@nestjs/testing';
import { ThrottlerStorage } from '@nestjs/throttler';
import { ListMoviesInput, MovieListCategoryEnum } from 'Entain/resources/movie/dto/list-movies.input';
import { ListMoviesResponse } from 'Entain/resources/movie/dto/list-movies.response';
import { SearchMoviesInput } from 'Entain/resources/movie/dto/search-movies.input';
import { SearchMoviesResponse } from 'Entain/resources/movie/dto/search-movies.response';
import { MovieDetails } from 'Entain/resources/movie/entities/movie-details.entity';
import { MovieController } from 'Entain/resources/movie/movie.controller';
import { MovieService } from 'Entain/resources/movie/movie.service';
import { movieDetailsStub, movieListResponseStub, movieSearchResponseStub } from 'Entain/resources/movie/stubs/movie.stubs';
// #endregion

jest.mock('Entain/resources/movie/movie.service');

describe('MovieController', () => {
  let moviesController: MovieController;
  let movieService: MovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieController],
      providers: [
        MovieService,
        { provide: 'THROTTLER:MODULE_OPTIONS', useValue: {} },
        { provide: ThrottlerStorage, useValue: {} }
      ],
    }).compile();

    moviesController = module.get<MovieController>(MovieController);
    movieService = module.get<MovieService>(MovieService);
  });

  it('should be defined', () => {
    expect(moviesController).toBeDefined();
  });

  describe('GET /movie/list', () => {
    let result: ListMoviesResponse;
    const input: ListMoviesInput = { page: 1, category: MovieListCategoryEnum.NowPlaying };

    beforeEach(async () => {
      result = await moviesController.list(input);
    });

    it('should call the MovieService list method', () => {
      expect(movieService.list).toHaveBeenCalledWith(input);
    });

    it('should return movies response', () => {
      expect(result).toEqual(movieListResponseStub());
    });
  });

  describe('GET /movie/search', () => {
    let result: SearchMoviesResponse;
    const input: SearchMoviesInput = { page: 1, query: 'test' };

    beforeEach(async () => {
      result = await moviesController.search(input);
    });

    it('should call the MovieService search method', () => {
      expect(movieService.search).toHaveBeenCalledWith(input);
    });

    it('should return movies response', () => {
      expect(result).toEqual(movieSearchResponseStub());
    });
  });

  describe('GET /movie/:id', () => {
    let result: MovieDetails;
    const input: number = 1;

    beforeEach(async () => {
      result = await moviesController.findById(input);
    });

    it('should call the MovieService findById method', () => {
      expect(movieService.findById).toHaveBeenCalledWith(input);
    });

    it('should return movie details', () => {
      expect(result).toEqual(movieDetailsStub());
    });
  });
});
