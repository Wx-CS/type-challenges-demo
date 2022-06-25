type TrimRight<S extends string> = S extends `${infer L}${' ' | '\n' | '\t'}` ? TrimRight<L> : S;

// type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}` ? TrimLeft<R> : S;