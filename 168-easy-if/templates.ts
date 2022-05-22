type If<C extends boolean, T, F> = C extends true ? T : F;

// js 
function ifs(c: any, t:any, f: any) {
  return c ? t : f;
}


// 类型兼容性 https://www.typescriptlang.org/docs/handbook/type-compatibility.html
// 非严格模式下 null会分配给boolean
// 需开启严格模式