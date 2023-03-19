type nullStr = ' ' | '\n' | '\t';

type Trim<S extends string> =
    S extends `${nullStr}${infer R}`
        ? Trim<R>
        : S extends `${infer R}${nullStr}`
        ? Trim<R>
        : S;

// 先遍历左边空字符串
// 再遍历右边的
