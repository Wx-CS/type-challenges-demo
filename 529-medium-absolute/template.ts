// 首先将T转换成string
// 然后去掉负号
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer Num}` ? Num : `${T}`;