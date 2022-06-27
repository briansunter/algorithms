import bubbleSort from '../lib/bubbleSort';

describe('bubble sort', () => {
  test('it should handle edge cases', () => {
    expect(bubbleSort([])).toStrictEqual([]);
    expect(bubbleSort([1])).toStrictEqual([1]);
    expect(bubbleSort([1, 2])).toStrictEqual([1, 2]);
  });

  test('it should handle basic sort', () => {
    expect(bubbleSort([2, 1])).toStrictEqual([1, 2]);
    expect(bubbleSort([2, 1, 3])).toStrictEqual([1, 2, 3]);
    expect(bubbleSort([2, 1, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });

  test('it should handle strings', () => {
    expect(bubbleSort(['ab', 'abc', 'aa'])).toStrictEqual(['aa', 'ab', 'abc']);
  });
});
