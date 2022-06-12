// 转为array
type IsNever<T> = [T] extends [never] ? true : false