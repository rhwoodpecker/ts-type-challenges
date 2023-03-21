type LengthOfString<
    S extends string,
    Acc extends string[] = []
> = S extends `${infer Head}${infer Total}`
    ? LengthOfString<Total, [...Acc, Head]>
    : Acc['length'];

// 给泛型第二个参数有一个默认数组
// 然后遍历字符串将字符push
// 最后遍历完返回数组 lenght
