/**
 * @packageDocumentation
 * @category Module
 */

//#region imports
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from 'Entain/app.controller';
import { AppService } from 'Entain/app.service';
import { EntainError } from 'Entain/config/error';
import { GlobalExceptionFilter } from 'Entain/config/error/global-exception.filter';
import { MovieModule } from 'Entain/resources/movie/movie.module';
//#endregion

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => [
        {
          ttl: config.get<number>('THROTTLE_TTL_IN_MILLISECONDS'),
          limit: config.get<number>('THROTTLE_LIMIT'),
        },
      ],
    }),
    MovieModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    EntainError,
    { provide: APP_FILTER, useClass: GlobalExceptionFilter },
  ],
})
export class AppModule { }
