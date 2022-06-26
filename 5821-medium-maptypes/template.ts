type MapTypes<T extends object, R extends { mapFrom: unknown, mapTo: unknown }> = {
  [K in keyof T]: T[K] extends R['mapFrom'] 
    ? R extends { mapFrom: T[K], mapTo: unknown } ? R['mapTo'] : never 
    : T[K]
}
// 需要去除R为 | 的情况