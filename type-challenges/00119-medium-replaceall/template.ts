type ReplaceAll<
    S extends string,
    From extends string,
    To extends string
> = From extends ''
    ? S
    : S extends `${infer A}${From}${infer B}`
    ? `${A}${To}${ReplaceAll<B, From, To>}`
    : S;

    // 从左到右一次遍历，如果匹配到From ，
    // 那么左边肯定不含有From，需要接着递归右边
