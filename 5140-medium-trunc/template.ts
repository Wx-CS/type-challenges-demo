type Trunc<T extends string | number, U extends string = ''> = 
  `${T}` extends `${infer L}${infer R}` ? 
    L extends '.' ? `${U}` : Trunc<R, `${U}${L}`>
    : `${U}`