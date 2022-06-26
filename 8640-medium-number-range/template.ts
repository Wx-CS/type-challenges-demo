// 填充数组
type FillArr<T extends unknown[], N> = T['length'] extends N ? T : FillArr<[...T, unknown], N>
// type test1 = arr<[], 3> => [unknown, unknown, unknown]

//  第三个case未通过
// type NumberRange<L, H, S extends unknown[] = FillArr<[], L>> = L | 
//   ( S['length'] extends H ? H : NumberRange<[unknown, ...S]['length'], H, [unknown, ...S]> )

type NumberRange<L, H, R = never, U extends never[] = [] > = U['length'] extends H 
  ? R | U['length'] 
  : U['length'] extends L
    ? NumberRange<L, H, R | U['length'], [never, ...U]> 
    : NumberRange<L, H, R extends never ? never : R | U['length'], [never, ...U]>