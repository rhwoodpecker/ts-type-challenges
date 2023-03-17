type Last<T extends any[]> = T extends [...infer _ , infer P] ? P : never;

// 解题思路，通过结构 赋值操作