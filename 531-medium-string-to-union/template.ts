type StringToUnion<T extends string> = T extends `${infer L}${infer R}` ? (R extends '' ? L : (L | StringToUnion<R>)) : never;
