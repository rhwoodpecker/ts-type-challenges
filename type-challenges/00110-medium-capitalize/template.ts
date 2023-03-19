type MyCapitalize<S extends string> =
    S extends `${infer P}${infer Q}`
        ? `${Uppercase<P>}${Q}`
        : S;

        // 模板字符串获取第一个字母和最后一串再做拼接