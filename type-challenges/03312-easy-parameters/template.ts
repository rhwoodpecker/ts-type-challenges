type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;


// T extends (...args: infer P) => any
// 将any[] 推导赋值给P