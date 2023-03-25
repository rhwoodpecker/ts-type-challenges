type Merge<F, S> = {
    [K in keyof F | keyof S]: K extends keyof S
        ? S[K]
        : K extends keyof F
        ? F[K]
        : never;
};

// 键名需要方框号，键值不需要，键名集合
// 键值优先取后面

