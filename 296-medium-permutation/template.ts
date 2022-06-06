// [T] extends [never] -> prevent it from being distributive
// T extends keyof any -> declare T is either string, number, or symbol to traverse
// [TT in T] -> traverse T
// [TT, ...Permutation<Exclude<T, TT>>] -> Permutate the rest element
// {}[T] -> turn object into union of arrays

type Permutation<T extends keyof any> = [T] extends [never] ? 
[] : { [TT in T]: [TT, ...Permutation<Exclude<T, TT>>] }[T];
