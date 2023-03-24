type AppendToObject<
    T extends Object,
    U extends PropertyKey,
    V
> = {
    [k in keyof T | U]: k extends keyof T ? T[k] : V;
};

// 通过遍历key 然后联合类型加上U生成Key
// value通过属性是不是在key maps里面，不是返回V
