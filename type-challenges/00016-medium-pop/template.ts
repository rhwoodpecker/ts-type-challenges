// type Pop<T extends any[]> = T['length'] extends 0
//     ? T
//     : T extends [...infer Rest, infer _]
//     ? Rest
//     : never;

type Pop<T extends any[]> = T extends [
    ...infer Rest,
    infer _
]
    ? Rest
    : [];
