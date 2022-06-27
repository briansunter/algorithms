interface Comparable<T> {
  // Compare this object with another object.
  // @param {T} other The object to compare with.
  // @returns {number} A negative number if this object is less than the other object,
  // a positive number if this object is greater than the other object,
  // or 0 if the objects are equal.
  compareTo(other: any): number;
}
