type Diff<O, O1> = {
    [key in keyof O | keyof O1 as key extends keyof O
        ? key extends keyof O1
            ? never
            : key
        : key]: key extends keyof O
        ? O[key]
        : key extends keyof O1
        ? O1[key]
        : never;
};

// 找出不在O里面的
// key extends keyof O  


// 找出在O里面但不在O1里面的
// key extends keyof O1
//             ? never
//             : key
