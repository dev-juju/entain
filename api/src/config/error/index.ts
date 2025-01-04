/**
 * @packageDocumentation
 * @category Util
 */

//#region imports
import { Global, HttpException, HttpStatus, Injectable } from '@nestjs/common';
//#endregion

export type ErrorResponse = {
  message: string | object
  code: string
  path: string
  service_name: string
  timestamp: string
}

@Global()
@Injectable()
export class EntainError {
  /**-------------------------------------------------------------------------------------------------------------------------
   *                                                 Error Payloads
   *--------------------------------------------------------------------------------------------------------------------------
   *
   * Error payloads provide useful information to clients/consumers without leaking sensitive system details
   */
  static invalidContext: ErrorPayload = { cause: 'INVALID_CONTEXT', description: 'Invalid context. Please either use REST over HTTP' };
  static invalidHost: ErrorPayload = { cause: 'INVALID_HOST', description: 'Can not determine request host' };

  /**-------------------------------------------------------------------------------------------------------------------------
   *                                                 throw
   *--------------------------------------------------------------------------------------------------------------------------
   *
   * @param {ErrorPayload} payload The payload to use in thrown error
   */
  throw = ({ payload = EntainError.invalidContext, httpStatus = HttpStatus.BAD_REQUEST }: ThrowParams) => {
    throw new HttpException(payload, httpStatus);
  }
}

/**-------------------------------------------------------------------------------------------------------------------------
 *                                                 TYPES
 *--------------------------------------------------------------------------------------------------------------------------
 */
export type ErrorCode = 'INVALID_CONTEXT' | 'INVALID_HOST' | 'BAD_REQUEST' | 'DUPLICATE_ENTITY' | 'RECORD_NOT_FOUND' | 'FETCH_ERROR';

export type ErrorPayload = {
  cause: ErrorCode
  description?: string
};

export type ThrowParams = {
  payload: ErrorPayload
  httpStatus?: HttpStatus
  graphqlCode?: ErrorCode
};
