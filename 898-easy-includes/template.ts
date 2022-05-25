import { Equal } from "@type-challenges/utils";

export type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Reset] ? 
  Equal<First, U> extends true ? true : Includes<Reset, U>
  : false;

// js
// function includes(arr:[], key:any) {
//   for(let i = 0; i < arr.length; i++) {
//     if (arr[i] === key) {
//       return true;
//     }
//   }
//   return false
// }

// 引用了import  需export