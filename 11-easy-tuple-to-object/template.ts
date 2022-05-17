type TupleToObject<T extends readonly ( string | number | symbol )[]> = {
  [p in T[number]]: p
}

// keyof array => 索引
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
// type TupleToObject<T extends readonly any[]> = {
//   [p in keyof T]: p
// }
type r = TupleToObject<typeof tuple>


// js 
function tupleToObject(arr) {
  // 首先要判断array的key 是否是string number symbol
  const obj = {};
  arr.forEach(item => {
    obj[item] = item;
  });
  return obj;
}

// typeof 获取类型
// 遍历interface keyof
// 遍历array  T[number]