type AppendArgument<
    Fn extends (...arg: any) => any,
    A
> = Fn extends (...arg: [...infer B]) => infer R
    ? (...arg: [...B, A]) => R
    : never;

// ...arg 获取函数参数，用过类数组 ...infer 赋值给B， 再获取函数返回值
// 重新生成一个新的函数
