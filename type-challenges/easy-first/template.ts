// type First<T extends any[]> = T extends [] ? never : T[0];


// 根据length
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];

// 根据 T[number] 返回的 union 判断是否在值里面 
type First<T extends any[]> = T extends [infer First, ...infer Rest] ?  First : never;

// infer 解构变量赋值


const a: any[] = []
type first = typeof  a[0]
// 空数组的第一个元素是 undefined
const b:first = undefined;

function getFirst(arr: any[]) {
    const [first, ...reset] = arr;
    return first || 'never'
}