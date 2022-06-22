type Fibonacci<T extends number, Arr extends any[] = [any, any], Prev extends any[] = [any], Cur extends any[] = [any]> = T extends (1 | 2)
  ? 1
  : Arr["length"] extends T
  ? Cur["length"]
  : Fibonacci<T, [...Arr, any], Cur, [...Prev, ...Cur]>;