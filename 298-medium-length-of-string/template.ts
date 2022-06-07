// 转为数组然后借助length属性获取长度
type strToArr <T extends string> = T extends `${infer L}${infer R}` ? [L, ... strToArr<R>] : [];
type LengthOfString<S extends string> = strToArr<S>['length']