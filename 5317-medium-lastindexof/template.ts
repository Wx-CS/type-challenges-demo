type LastIndexOf<T extends unknown[], U> = T extends [...infer L, infer R]
  ? MyEqual<R, U> extends true
    ? L['length']: LastIndexOf<L, U>
  : -1;
