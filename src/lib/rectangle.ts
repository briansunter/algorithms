interface RectangleData extends Comparable<RectangleData> {
  // The width of the rectangle.
  width: number;
  // The height of the rectangle.
  height: number;
}

/*
 * The area of a rectangle is its width multiplied by its height.
 * @param {Rectangle} rectangle The rectangle to compute the area of.
 * @returns {number} The area of the rectangle.
 */
function rectangleArea(rectangle: RectangleData): number {
  return rectangle.width * rectangle.height;
}

interface Rectangle extends RectangleData, Comparable<Rectangle> {
  // Sort the rectangle by area.
  compareTo(other: Rectangle): number;
}

/*
 * Build a SortableRectangle from a Rectangle.
 * @param {Rectangle} rectangle The rectangle to build a SortableRectangle from.
 * @returns {SortableRectangle} The SortableRectangle built from the rectangle.
 */
function buildRectangle({ width, height }: Rectangle): Rectangle {
  return {
    width,
    height,
    compareTo(other: Rectangle) {
      return rectangleArea(this) - rectangleArea(other);
    },
  };
}
