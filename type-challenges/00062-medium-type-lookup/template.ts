
type LookUp<U, T > = U extends {type: T} ? U : never;

// extends  遍历联合类型

type s1 =  "ss" | "sss"

type S1<U, T> = U extends T ? U : never

type s2 = S1<s1, ''>
