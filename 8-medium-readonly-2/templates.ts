type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & Omit<T, K>;

// T有k有的属性  readonly
// T有K无的属性  不变  使用Omit去除K
