// your answers
type Permutation<T, I = T> = [T] extends never[]
    ? []
    : I extends infer R
    ? [R, ...Permutation<Exclude<T, R>>]
    : [];

    