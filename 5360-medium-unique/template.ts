// 利用indexof 判断重复
type Unique<T> = T extends [...infer L, infer R]
  ? IndexOf<L, R> extends -1
    ? [...Unique<L>, R]
    : [...Unique<L>]
  : [];