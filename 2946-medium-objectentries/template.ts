// 过滤掉undefined
type Value<T> = [T] extends [undefined] ? T : Exclude<T, undefined>;
type ObjectEntries<T> = {
  [K in keyof T]-?: [K, Value<T[K]>]
}[keyof T];