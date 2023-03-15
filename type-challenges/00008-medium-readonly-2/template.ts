

type MyReadonly2<T, K extends keyof T> = Pick<
    T,
    Exclude<keyof T, K>
> & {
    readonly [P in K]: T[P];
};

// 先将 K 中对应的值设为readonly
//  Exclude<keyof T, K> 获取到排除K 的键值
// Pick<T, Exclude<keyof T, K>>  挑选出排除K集合的属性
// 然后求并集