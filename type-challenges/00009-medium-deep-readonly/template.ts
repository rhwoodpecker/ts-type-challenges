type DeepReadonly<T> = {
    readonly [Key in keyof T]: keyof T[Key] extends never
        ? T[Key]
        : DeepReadonly<T[Key]>;
};

// 判断value 是否是 never
// 是 表示是基础类型 
// 否 递归调用
