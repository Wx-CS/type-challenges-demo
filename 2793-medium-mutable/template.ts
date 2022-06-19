type Mutable<T extends Readonly<object> | ReadonlyArray<unknown>> = {
  -readonly[P in keyof T]: T[P]
}