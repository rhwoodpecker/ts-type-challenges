type MyExclude<T, U> = T extends U ? never : T

// union extends union 行为
// 遍历每个是否对应

type a = "1" | "2" | "3"
type b = "2" | "1"

type c = MyExclude<a, b>