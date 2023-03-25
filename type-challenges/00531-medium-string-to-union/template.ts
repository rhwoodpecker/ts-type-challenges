type StringToUnion<T extends string> = T extends ''
    ? never
    : T extends `${infer First}${infer Rest}`
    ? First | StringToUnion<Rest>
    : T;

    // 递归调用，如果能匹配到Rest 就递归
    // 不能匹配到rest 表明只剩一个字符