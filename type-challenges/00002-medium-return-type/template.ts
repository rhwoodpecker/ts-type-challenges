type MyReturnType<T extends (...args: any) => any> =
    T extends (...args: any) => infer P ? P : never;

// 通过extends 一个函数， infer 赋值返回值实现