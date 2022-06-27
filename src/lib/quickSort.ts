/*  
Quicksort is a divide and conquer algorithm.
It works by recursively partitioning a list into two parts,
and then sorting each of those parts.
@param {array} The input array to be sorted
@returns {array} The sorted array.
*/
function quickSort<T>(input: T[]): T[] {
  if (input.length <= 1) {
    return input;
  }
  const pivot = input[0];
  const left = input.slice(1).filter((item) => item < pivot);
  const right = input.slice(1).filter((item) => item >= pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

export { quickSort };
export default quickSort;
