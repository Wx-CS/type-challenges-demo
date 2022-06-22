type Flip<T> = { [K in keyof T as T[K] extends true ? 'true' : T[K] extends false ? 'false' : T[K] extends string | number | symbol ? T[K] : never]: K }

type sss = Flip<{ pi: 3.14; bool: true }>