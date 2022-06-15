// 分割+ -
type HasSigned<A extends string> = A extends `${infer start}${infer end}` ? start extends '+' | '-' ? [start, end] : ['', A] : ['', ''];
// 分割%
type HasPercentSigned<A extends string> = A extends `${infer str}%` ? [str, '%'] : [A, ''];

type PercentageParser<A extends string> = [HasSigned<A>[0], ...HasPercentSigned<HasSigned<A>[1]>];

type A = '+100';
type ss = HasSigned<A>;