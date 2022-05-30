// type Simple =
//   | string
//   | boolean
//   | number
//   | bigint
//   | symbol
//   | null
//   | undefined
//   | Function;

// type DeepReadonly<T> = T extends Simple
//   ? T
//   : { readonly [K in keyof T]: DeepReadonly<T[K]> };

type DeepReadonly<T> = {
  readonly [key in keyof T]: keyof T[key] extends never
    ? T[key]
    : DeepReadonly<T[key]>;
}