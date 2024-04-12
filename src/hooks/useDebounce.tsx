import { useEffect, useState } from 'react';

/**
 * Hook to handle input debouncing
 *
 * @param {string} value
 * @param {number} delay
 * @return {*}  {string}
 */
const useDebounce = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
