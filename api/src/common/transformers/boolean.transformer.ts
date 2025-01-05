/**
 * @packageDocumentation
 * @category Util
 */

// #region import
import { TransformFnParams } from 'class-transformer';
// #endregion

/**-------------------------------------------------------------------------------------------------------------------------
 *                                                 handleBooleans
 *--------------------------------------------------------------------------------------------------------------------------
 * Tries to transform true, false, 1, 0 or boolean string to boolean value, otherwise returns original value
 * Should be used for transforming user input in DTO-s to boolean together with @IsBoolean() validator
 *
 * @param value
 * @returns {any}
 */
export const handleBooleans = ({ value }: TransformFnParams): any => {
  if (typeof value === 'boolean') return value;

  if (typeof value === 'number') {
    if (value === 1) return true;
    if (value === 0) return false;
    return value;
  }

  if (typeof value === 'string') {
    switch (value.toLowerCase()) {
      case 'true':
      case '1':
        return true;
      case 'false':
      case '0':
        return false;
      default:
        return value
    }
  }

  return value;
}
