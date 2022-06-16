// 单个字符串
type singleChar<s extends string, c extends string> = s extends c ? '' : s;

type DropChar<S extends string, C extends string> = S extends `${infer L}${infer R}` ? `${singleChar<L, C>}${DropChar<R, C>}` : '';

type str = singleChar<' ', 'S'>;
type str1 = DropChar<'butter fly!', ' '>;