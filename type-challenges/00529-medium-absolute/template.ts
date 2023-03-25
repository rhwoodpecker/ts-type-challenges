type Absolute<T extends number | string | bigint> =
    `${T}` extends `-${infer U}` ? U : `${T}`;

    // 转成字符串处理，如果能匹配到- 就返回U
