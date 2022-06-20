// 至转化一层array
type flattenOnceArr<T extends any[]> = T extends [infer L , ... infer R] ? L extends any[] ? [...L, ...flattenOnceArr<R>] : [L, ...flattenOnceArr<R>]: [];

// 使用MinunOne
// type FlattenDepth<T extends any[], K extends number = 1> = MinusOne<K> extends 0 ? flattenArr<T> : FlattenDepth<flattenArr<T>, MinusOne<K>>;
// 最后一个case过不了  由于使用MInusOne

// 不使用Minunone
type FlattenDepth<T extends unknown[], C extends number = 1, R extends unknown[] = []> = 
  R['length'] extends (T['length'] | C) ? T : FlattenDepth<flattenOnceArr<T>, C, [...R, any]>;