/**
 * @packageDocumentation
 * @category Config
 */

//#region imports
import cookie, { type FastifyCookieOptions } from '@fastify/cookie'
import helmet from '@fastify/helmet';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, type NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from 'Entain/app.module';
import { corsOptions } from 'Entain/config/cors';
import { configureSwagger } from 'Entain/config/swagger';
//#endregion

(async () => {
  const adapter = new FastifyAdapter({ trustProxy: true }); // TODO: We should limit this to only api's IP
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, adapter, {
    logger: ['log', 'fatal', 'error', 'warn', 'debug', 'verbose']
  });

  await app.register(helmet as any, {
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: false,
    contentSecurityPolicy: {
      directives: {
        frameSrc: [`'self'`],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`, `'unsafe-eval'`],
        manifestSrc: [`'self'`],
        imgSrc: [`'self'`, 'data:'],
      },
    },
  });

  app.register(cookie as any, { parseOptions: {} } as FastifyCookieOptions)
  app.enableCors(corsOptions);
  app.enableVersioning({ type: VersioningType.URI });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    })
  );

  configureSwagger(app);

  await app.listen(process.env.PORT, '0.0.0.0');
})();
