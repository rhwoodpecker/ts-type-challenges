type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

// keyof 获取interface、key

interface T1 {
    a: string
    b: string
}
// 获取keys
type aKeys = keyof T1
const k: aKeys = "a"

// 自定义keys
type bKeys = "a" | "b"
let k1: bKeys = "a"
// 可以正常赋值
k1 = k
