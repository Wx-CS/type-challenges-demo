// 第一个参数为0 首先判false   第一个参数不为0第二个参数为0 判为true

type GreaterThan<T extends number, U extends number, A extends unknown[] = []> = A['length'] extends T ? 
  false : A['length'] extends U ? true : GreaterThan<T, U, [...A, unknown]>