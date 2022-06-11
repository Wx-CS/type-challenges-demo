// 将驼峰转为中划线

// 首先判断否是大写
type IsUpCase<T extends string> = T extends Lowercase<T> ? false : true;
// 添加中划线
type Abs<S extends string> = S extends '-' ? S : S extends `-${infer R}` ? R : S;
// 转换
type MakeChain<S extends string> = S extends `${infer L}${infer R}` ? 
  IsUpCase<L> extends true? `-${Lowercase<L>}${MakeChain<R>}` : `${L}${MakeChain<R>}`
  : S;

type KebabCase<S extends string> = Abs<MakeChain<S>>;

// js代码
function transKebabCase (s:string):string {
  let newStr = ''
  for (let i = 0; i < s.length; i++) {
    let str = s.charAt(i);
    if (str !== str.toLocaleLowerCase() && i !== 0) {
      newStr += `-${str.toLocaleLowerCase()}`;
    } else if(str === str.toLocaleUpperCase() && i === 0) {
      newStr += `${str.toLocaleLowerCase()}`;
    } else {
      newStr += str;
    }
  }
  return newStr;
}