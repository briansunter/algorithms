type Primitive = string | number | boolean;

/* Sortable Primitive is a wrapper around string, number, and boolean that
 * implements the Comparable interface.
 */
interface SortablePrimitive extends Comparable<Primitive> {
  primitive: Primitive;
}

function comparePrimitive(a: SortablePrimitive, b: SortablePrimitive): number {
  if (!b || !a) {
    return 0;
  }

  if (a.primitive === b.primitive) {
    return 0;
  }
  if (a.primitive < b.primitive) {
    return -1;
  }
  return 1;
}

function buildSortablePrimitive(primitive: Primitive): SortablePrimitive {
  const sortablePrimitive: SortablePrimitive = {
    primitive,

    compareTo(other: SortablePrimitive): number {
      return comparePrimitive(this, other);
    },
  };
  return sortablePrimitive;
}

function buildPrimitive(primitive: SortablePrimitive): Primitive {
  return primitive.primitive;
}
export { SortablePrimitive, Primitive, buildSortablePrimitive, buildPrimitive };
