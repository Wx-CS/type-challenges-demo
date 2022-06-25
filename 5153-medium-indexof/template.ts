// import type { Equal } from '@type-challenges/utils'
type MyEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
type IndexOf<T extends unknown[], U, K extends unknown[] = []> = T extends [infer L, ...infer R] 
  ? MyEqual<L, U> extends true 
    ? K['length'] 
    : IndexOf<R, U, [...K, unknown]>
  : -1;