type Concat<T extends unknown [], U extends unknown []> = [...T, ...U];


// js
function concat1(arr1: any[], arr2: any[]) {
  return [...arr1, ...arr2];
}
