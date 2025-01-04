/**
 * @packageDocumentation
 * @category Config
 */

//#region imports
import { type NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { RawServerDefault } from 'fastify';
//#endregion

let swaggerJsonString: string;

export const setSwaggerJsonString = (current: string) => swaggerJsonString = current;
export const getSwaggerJsonString = () => swaggerJsonString;

export const configureSwagger = async (app: NestFastifyApplication<RawServerDefault>) => {
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setVersion('1.0')
    .setTitle('Entain API')
    .setDescription('Entain API is an isolated service built to provide data to other Entain apps (Web, Mobile etc)')
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (_controllerKey: string, methodKey: string) => methodKey
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('rest', app, document);

  setSwaggerJsonString(JSON.stringify(document));
}
