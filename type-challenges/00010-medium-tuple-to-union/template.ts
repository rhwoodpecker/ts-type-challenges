// import { Equal } from '@type-challenges/utils';
type TupleToUnion<T extends unknown[]> = T extends [...infer P] ? P[number] : never;

// 通过infer 赋值给P

type A1 = [123, true]
type A11 = A1[number]
type A2 = A1 extends [...infer P] ? P : never
// type V3 = Equal<A1, A2>
// type V4 = Equal<A11, 123 | true>;