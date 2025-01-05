/**
 * @packageDocumentation
 * @category Module
 */

import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EntainError } from 'Entain/config/error';
import { MovieController } from 'Entain/resources/movie/movie.controller';
import { MovieService } from 'Entain/resources/movie/movie.service';

@Module({
  imports: [HttpModule],
  providers: [MovieService, ConfigService, EntainError],
  controllers: [MovieController],
  exports: [MovieService],
})
export class MovieModule { }
