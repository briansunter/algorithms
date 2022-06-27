/* 
Merge Sort is a divide and conquer algorithm.
It works by recursively partitioning a list into two parts,
and then sorting each of those parts.
@param {array} The input array to be sorted
@returns {array} The sorted array.
*/
function mergeSort<T>(input: T[]): T[] {
  if (input.length <= 1) {
    return input;
  }
  const mid = Math.floor(input.length / 2);
  const left = input.slice(0, mid);
  const right = input.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge<T>(left: T[], right: T[]): T[] {
  const result: T[] = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift() as T);
    } else {
      result.push(right.shift() as T);
    }
  }
  return result.concat(left).concat(right);
}

export { mergeSort };
export default mergeSort;
