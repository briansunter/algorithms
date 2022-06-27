import fs from 'fs-extra';
import bubbleSort from '../lib/genericBubbleSort';
import {
  SortablePrimitive,
  Primitive,
  buildSortablePrimitive,
  buildPrimitive,
} from '../lib/sortablePrimitive';

const sandboxRoot = './sandbox';
const samplesRoot = './samples';

/**
 * Clone any files in a "./samples" folder into
 * a "./sandbox" folder, overwriting any files
 * currently in there. This is useful for allowing
 * your test suite to make changes to files without
 * changing the originals, so that you can easily
 * reset back to an original state prior to running a test.
 */
function resetSandbox() {
  if (!fs.existsSync(samplesRoot)) {
    // Then no samples exist, and no sandbox needed
    return;
  }
  fs.ensureDirSync(sandboxRoot);
  fs.emptyDirSync(sandboxRoot);
  fs.copySync(samplesRoot, sandboxRoot);
}

function buildSortablePrimitiveArray(input: Primitive[]): SortablePrimitive[] {
  return input.map((item) => buildSortablePrimitive(item));
}
function buildPrimitiveArray(input: SortablePrimitive[]): Primitive[] {
  return input.map((item) => buildPrimitive(item));
}
// test('test dummy sort', () => {
//   expect(bubbleSort([])).toStrictEqual([]);
//   expect(bubbleSort(buildSortablePrimitiveArray([1]))).toStrictEqual(
//     buildSortablePrimitiveArray([1]),
//   );
// });

test('test sort', () => {
  const randomArray: SortablePrimitive[] = buildSortablePrimitiveArray([
    9, 8, 7, 6, 5, 4, 3, 2, 1,
  ]);
  const sortedArray: Primitive[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const output: SortablePrimitive[] = bubbleSort(randomArray);
  const sorted = buildPrimitiveArray(output);
  expect(sorted).toStrictEqual(sortedArray);
});

// test('test string sort', () => {
//   expect(
//     bubbleSort(buildSortablePrimitiveArray(['ab', 'abc', 'aa'])),
//   ).toStrictEqual(buildSortablePrimitiveArray(['aa', 'ab', 'abc']));
// });
