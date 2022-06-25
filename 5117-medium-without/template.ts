// 去除一个元素
type WithoutOne<T, N> = T extends [infer L, ...infer R] ? L extends N ? Without<R, N> : [L, ...Without<R, N>]: T;

type Without<T, U> = U extends number ? WithoutOne<T, U> : U extends [infer L, ...infer R] ? Without<WithoutOne<T, L>, R> : T;