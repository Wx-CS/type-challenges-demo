// type RequiredByKeys<T, K extends keyof any = string> = Omit<Required<Pick<T, K & keyof T>> & Omit<T, K>, never>;

type RequiredByKeys<T, K extends keyof any = string> = Omit<Required<{[k in K & keyof T]?: T[k]}> & Omit<T, K>, never>
