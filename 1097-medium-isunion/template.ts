type IsUnion<T, K = T> = T extends K ? 
 [K] extends [T] ? false : true
 : never;
