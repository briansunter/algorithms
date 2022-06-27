/*
 * Bubble Sort is a simple sorting algorithm
 * that works by repeatedly swapping adjacent elements if they are in wrong order.
 * This implementation is in place, but it is not efficient.
 * @param {array} The input array to be sorted.
 * @returns {array} The sorted array.
 */

function genericBubbleSort<T extends Comparable<T>>(input: T[]): T[] {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      const first = input[j];
      const second = input[j + 1];
      if (first.compareTo(second) > 0) {
        input[j] = second;
        input[j + 1] = first;
      }
    }
  }
  return input;
}
export { genericBubbleSort };
export default genericBubbleSort;
