type Subsequence<T extends unknown[]> = T extends [infer L, ...infer R] ? [L , ...Subsequence<R>] | Subsequence<R> : T