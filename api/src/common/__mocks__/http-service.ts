/**
 * @packageDocumentation
 * @category Mock
 */

// #region imports
import { HttpService } from '@nestjs/axios';
import { mockDeep } from 'jest-mock-extended';
// #endregion

export const HttpServiceMock = mockDeep<HttpService>();
