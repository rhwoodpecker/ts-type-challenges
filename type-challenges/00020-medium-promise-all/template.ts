declare function PromiseAll<T extends unknown[]>(
    values: readonly [...T]
): Promise<{ [Key in keyof T]: Awaited<T[Key]> }>;


// promiseAll 返回一个promise，返回内容为没一个promise的执行结果数组