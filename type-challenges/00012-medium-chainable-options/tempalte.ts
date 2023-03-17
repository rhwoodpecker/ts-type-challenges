type Chainable<Result = {}> = {
    option<K extends string, V>(
        key: K extends keyof Result ? never : K,
        value: V
    ): Chainable<Omit<Result, K> & { [P in K]: V }>;
    get(): Result;
};

// 这里值得提一下为什么是 { [P in K] : V }, 直接写 { K : V } 不行吗？为什么还要in一下？
// 由于K是类型，类型是不能直接当成key的，在ts中对象如若想要以类型来当key也就是类型当键，要[k in K]这样写才行。
// option 函数返回一个Chainable 本身，通过对Chainable Result做运算
// 判断K是不是在Result 中，不在就返回K，存在就返回never
// option返回的时候先剔除K，然后再并集K
// 最后get返回Resulr
type A = "a" | "b" | "c" | "d" | "e"
type B= {
    a: string;
    b: string;
    f: string;
}

type C = Omit<B, A>