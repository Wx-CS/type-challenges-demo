type Combination<T extends string[], R = T[number], U = R> = 
  U extends string 
    ? U | `${U} ${Combination<[], Exclude<R, U>>}`
  : never