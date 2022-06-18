type LengthToArray<N extends string, T extends any[] = []> = `${T['length']}` extends N ? T : LengthToArray<N, [any, ...T]>;

type CreateLengthArray<S extends string, T extends any[] = []> = S extends `${infer F}${infer L}` ? CreateLengthArray<L, [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...LengthToArray<F>]> : T;

type MinusOne<T extends number> = CreateLengthArray<`${T}`> extends [infer _, ...infer S] ? S['length'] : never;
