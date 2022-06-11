// 判断false
type False = '' | 0 | false | [] | Record<string, never>
// 1
// type AnyOf<T extends readonly any[]> = T extends [infer First, ... infer Last] ? 
//   First extends False ? AnyOf<Last> : true 
//   : false 

// 2
type AnyOf<T extends readonly any[]> = T[number] extends False ? false : true 
