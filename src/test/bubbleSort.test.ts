import fs from 'fs-extra';
import bubbleSort from '../lib/bubbleSort';

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

test('test dummy sort', () => {
  expect(bubbleSort([])).toStrictEqual([]);
  expect(bubbleSort([1])).toStrictEqual([1]);
  expect(bubbleSort([1, 2])).toStrictEqual([1, 2]);
});

test('test sort', () => {
  expect(bubbleSort([2, 1])).toStrictEqual([1, 2]);
  expect(bubbleSort([2, 1, 3])).toStrictEqual([1, 2, 3]);
  expect(bubbleSort([2, 1, 3, 4])).toStrictEqual([1, 2, 3, 4]);
});

test('test string sort', () => {
  expect(bubbleSort(['ab', 'abc', 'aa'])).toStrictEqual(['aa', 'ab', 'abc']);
});

test('test sort', () => {
  expect(bubbleSort(['ab', 'abc', 'aa'])).toStrictEqual(['aa', 'ab', 'abc']);
});
