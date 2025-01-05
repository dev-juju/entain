/**
 * @packageDocumentation
 * @category Util
 */

import { TransformFnParams } from 'class-transformer';

/**-------------------------------------------------------------------------------------------------------------------------
 *                                                 handleStrings
 *--------------------------------------------------------------------------------------------------------------------------
 * Removes blank spaces from start and end of string
 *
 * @param value
 * @returns {any}
 */
export const handleStrings = ({ value }: TransformFnParams): any => {
  if (value && typeof value === 'string') {
    return value.trim();
  }

  return value;
}
