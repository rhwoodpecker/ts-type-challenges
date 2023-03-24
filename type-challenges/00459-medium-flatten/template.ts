type Flatten<T extends unknown[]> = T extends [
    infer H,
    ...infer R
]
    ? H extends unknown[]
        ? [...Flatten<H>, ...Flatten<R>]
        : [H, ...Flatten<R>]
    : [];

// 遍历第一个元素，如果是数组接着递归调用
