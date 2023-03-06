type TupleToObject<T extends readonly any[]> = {
    [P in  T[number]]: P
}


// 知识点，遍历数组值

const  arr = ["a","b"] as const
type arrConst = typeof arr
type arrValues = arrConst[number]
type s = "a" | "b"
// s == arrValues
