// Indexed Access Types
// https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html

export const nothing = null;

// インデックス型？
// []？
// 指定した型のプロパティの型を取得できる
type Person = {
	name: string,
	age: number,
};
// type Age = number
type Age = Person["age"];


// keyof演算子を利用できる
// type T = string | number
type T1 = Person[keyof Person];

// 別の型を指定できる
type T3 = "name" | "age";
type T4 = Person[T3];

