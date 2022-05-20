type MyExclude<T, U> = T extends U ? never : T

// extends可遍历type类型 

// js
// ['a', 'b', 'c']  ['a']
function myExclude(T, U: any) {
  const res = [];
  for(const item of T) {
    if(!U.includes(T)) {
      res.push(item);
    }
  }
  return res;
}