//  首先判断是否是arr 然后判断是否是空[]  

type IsTuple<T> = [T] extends [never]
  ? false : T extends [] ? true : T extends readonly[...infer L, any] ? true : false