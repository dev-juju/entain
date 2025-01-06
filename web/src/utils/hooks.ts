/**
 * A collection of custom hooks
 *
 * @packageDocumentation
 * @category Util
 */

//#region imports
import { useEffect, useState } from "react";
//#endregion

/**-------------------------------------------------------------------------------------------------------------------------
 *                                                 useDebounce
 *--------------------------------------------------------------------------------------------------------------------------
 *
 * Returns `value` after `delay` (timeout) has passed.
 * Useful when querying APIs based on user input (like in a search field), to reduce stress on API server
*/
export function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => setDebouncedValue(value), delay);
      return () => clearTimeout(handler);
    },
    [value, delay]
  );

  return debouncedValue;
}
