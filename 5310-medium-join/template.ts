type Join<T, U extends string | number, K extends string = ''> = T extends [infer L, ...infer R] ?
  Join<R, U, K extends '' ? L : `${K}${U}${L & string}`> : K;