import { useMemo } from 'react';

/**
 * A custom hook that shuffles an array and memoizes the result.
 * The shuffled array is only regenerated when the input array changes.
 *
 * @param array The array to shuffle
 * @returns A memoized shuffled copy of the input array
 */
const useShuffle = <T>(array: T[]): T[] => {
  return useMemo(() => {
    if (!array || array.length === 0) {
      return [];
    }

    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  }, [array]); // Only re-shuffle if the array reference changes
};

export default useShuffle;
