/**
 * @packageDocumentation
 * @category Controller
 */

//#region imports
import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { ApiForbiddenResponse, ApiInternalServerErrorResponse,ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ThrottlerGuard } from '@nestjs/throttler';
import { ListMoviesInput } from 'Entain/resources/movie/dto/list-movies.input';
import { ListMoviesResponse } from 'Entain/resources/movie/dto/list-movies.response';
import { SearchMoviesInput } from 'Entain/resources/movie/dto/search-movies.input';
import { SearchMoviesResponse } from 'Entain/resources/movie/dto/search-movies.response';
import { MovieDetails } from 'Entain/resources/movie/entities/movie-details.entity';
import { MovieService } from 'Entain/resources/movie/movie.service';
//#endregion

@ApiTags('Movie')
@Controller('movie')
@UseGuards(ThrottlerGuard)
export class MovieController {
  constructor(private readonly moviesService: MovieService) { }

  @Get('list')
  @ApiForbiddenResponse({ description: 'Unauthorized access' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @ApiOkResponse({ type: ListMoviesResponse })
  async list(@Query() listMoviesInput?: ListMoviesInput): Promise<ListMoviesResponse> {
    return await this.moviesService.list(listMoviesInput);
  }

  @Get('search')
  @ApiForbiddenResponse({ description: 'Unauthorized access' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @ApiOkResponse({ type: SearchMoviesResponse })
  async search(@Query() searchMoviesInput?: SearchMoviesInput): Promise<SearchMoviesResponse> {
    return await this.moviesService.search(searchMoviesInput);
  }

  @Get(':id')
  @ApiForbiddenResponse({ description: 'Unauthorized access' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @ApiOkResponse({ type: MovieDetails })
  findById(@Param('id') id: number): Promise<MovieDetails> {
    return this.moviesService.findById(+id);
  }
}
