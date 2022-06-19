type TupleToNestedObject<T extends any [], U> = T extends [infer L, ...infer R] ? 
  Record<T[0], TupleToNestedObject<R, U>>
  : U;
