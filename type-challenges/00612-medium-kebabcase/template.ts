type KebabCase<S extends string> =
    S extends `${infer First}${infer Rest}`
        ? Rest extends Uncapitalize<Rest>
            ? `${Lowercase<First>}${KebabCase<Rest>}`
            : `${Lowercase<First>}-${KebabCase<Rest>}`
        : S;

// 首先遍历字符串，取第一个字符S，和剩余字符Rest
// 如果Rest 字符串首字母转成小写等于它本身，说明还未遇到下一个首字符
// 如果不等于表明Rest首字符是大写的，需要添加-
