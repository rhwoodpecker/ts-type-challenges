type StringToNumber<T extends string> = T extends `${infer R extends number}` ? R : never

type sn = StringToNumber<"22">