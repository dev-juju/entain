/**
 * @packageDocumentation
 * @category Filter
 */

//#region imports
import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { isDev } from 'Entain/common/utilities';
import { ErrorResponse } from 'Entain/config/error';
import { type FastifyReply, type FastifyRequest } from 'fastify';
//#endregion

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  static readonly logger = new Logger();

  catch(exception: unknown, host: ArgumentsHost) {
    const unknownException = exception as any;

    const ctx = host.switchToHttp();
    const request = ctx.getRequest<FastifyRequest>();
    const response = ctx.getResponse<FastifyReply>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let details = { cause: '', description: '', message: '' };

    const errorResponse: ErrorResponse = {
      path: request?.url || '',
      message: unknownException.message,
      code: unknownException.cause,
      service_name: 'api',
      timestamp: new Date().toISOString(),
    };


    switch (exception.constructor) {
      case BadRequestException:
        status = (exception as BadRequestException).getStatus();
        details = (exception as BadRequestException).getResponse() as any;
        errorResponse.message = details.message || unknownException.message || unknownException.name;
        errorResponse.code = details.cause || unknownException.cause || 'BAD_REQUEST';
        break;
      case HttpException:
        status = (exception as HttpException).getStatus();
        details = (exception as HttpException).getResponse() as any;
        errorResponse.message = details.description || unknownException.message || unknownException.name;
        errorResponse.code = details.cause || unknownException.cause;
        break;
      case ValidationError:
        status = HttpStatus.BAD_REQUEST;
        errorResponse.message = Object.values((exception as ValidationError).constraints);
        errorResponse.code = 'BAD_REQUEST';
        break;
      default:
        break;
    }

    GlobalExceptionFilter.logger.error(errorResponse);
    if (isDev) GlobalExceptionFilter.logger.error(JSON.stringify(unknownException.stack));

    response.statusCode = status;
    response.send(errorResponse);
  }
}
