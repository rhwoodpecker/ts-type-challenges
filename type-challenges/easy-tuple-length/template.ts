type  Length<T extends readonly any[]> =  T["length"]

// 类数组，约定它是一个数组，且只读， 然后返回它的length