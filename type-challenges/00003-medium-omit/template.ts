type MyOmit<T, K extends keyof T> = {
    [Key in keyof T as Key extends K ? never : Key]: T[Key];
};


// keyof T 获取T属性
// Key  in  keyof T 遍历属性
// extends 遍历限制 是否是K中元素，存在返回never ，不存在返回该Key