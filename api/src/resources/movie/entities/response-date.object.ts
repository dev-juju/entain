/**
 * @packageDocumentation
 * @category Entity
 */

// #region import
import { ApiProperty } from '@nestjs/swagger';
// #endregion

export class ResponseDateObject {
  @ApiProperty()
  maximum: string;

  @ApiProperty()
  minimum: string;
}
