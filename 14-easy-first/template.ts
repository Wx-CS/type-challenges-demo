// 解法一
// type First<T extends any[]> = T extends [] ? never : T[0];
// 解法二
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0];
// 解法三
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
// 解法四
type First<T extends any[]> = T extends [infer First, ... infer Rest] ? First : never;

// js
const first = (arr) => {
  // arr为空数组 返回never
  if (Array.isArray(arr) && arr.length === 0) {
    return 'never';
  }
  return arr[0];
}

// 1、extends类型条件判断
// 2、获取array的length属性
// 3、extends union  判读的规则
// 4、inter的使用(推断)   类似于es6的结构赋值
