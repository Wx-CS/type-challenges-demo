type MyOmit<T, K extends keyof T> =Pick<T, Exclude<keyof T, K>>;

// 找差集
// type Exclude<T, U> = T extend U ? never : T;

// 返回K中的类型
// type Pick<T, K extends keyof T> = { [P in K]: T[P] } 