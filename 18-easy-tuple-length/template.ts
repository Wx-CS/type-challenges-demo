type Length<T extends readonly any[]> =  T['length']

// js
function getLengths (arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  return arr.length;
}

// tuple和数组的区别
// tuple是特殊的数组类型，明确知道包含多少元素及特定位置包含哪些类型。