type Replace<
    S extends string,
    From extends string,
    To extends string
> = From extends ''
    ? S
    : S extends `${infer R}${From}${infer Q}`
    ? `${R}${To}${Q}`
    : S;


    // 判断From是不是空串