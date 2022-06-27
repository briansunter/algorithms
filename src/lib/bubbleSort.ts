/*
 * Bubble Sort is a simple sorting algorithm
 * that works by repeatedly swapping adjacent elements if they are in wrong order.
 * This implementation is in place, but it is not efficient.
 * @param {array} The input array to be sorted.
 * @returns {array} The sorted array.
 */
function bubbleSort(input: any[]): any[] {
  // for every element in the array
  for (let i = 0; i < input.length; i++) {
    // compare the current element with the next element
    for (let j = 0; j < input.length; j++) {
      // if the current element is greater than the next element
      if (input[j] > input[j + 1]) {
        // swap the two elements
        const temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }
  return input;
}

export { bubbleSort };

export default bubbleSort;
