type Zip<T extends unknown[], U extends unknown[]> = T extends [infer TL , ...infer TR] ? U extends [infer UL, ...infer UR] ? [[TL, UL], ...Zip<TR, UR>]: [] : []
