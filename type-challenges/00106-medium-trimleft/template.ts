type TrimLeft<S extends string> = S extends `${
    | ' '
    | '\n'
    | '\t'}${infer R}`
    ? TrimLeft<R>
    : S;

// 模板字面量类型来匹配字符串的开头是否为空格字符（空格、制表符、换行符），如果是，则递归地调用 TrimLeft 去掉开头的空格字符；否则，返回原始字符串。
