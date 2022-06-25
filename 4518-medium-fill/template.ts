type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  S extends Array<unknown> = [],
  E extends Array<unknown> = []
> = T extends [infer F, ...infer R] ?
  S['length'] extends Start ?
    E['length'] extends End ?
      [...E, F, ...R] : 
      Fill<R, N, Start, End, S, [...E, N]> :
    Fill<R, N, Start, End, [...S, F], [...E, F]> :
  E;
 
// 1. make sure T contains at least one element
// 2. if array S's length is not enough, push F to S
// 3. if S's length is enough, freeze S, and push N to E rather than F
// 4. if E's length meets require, return array E with rest elements behind it
