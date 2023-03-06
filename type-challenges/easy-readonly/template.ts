type MyReadonly<T> = {
   readonly [P in keyof T]: T[P]
}



// interface Todo {
//     a: string
//     b: string
// }

// type keys = keyof Todo
// const k1:keys = "a"
// const k2:keys = "b"
