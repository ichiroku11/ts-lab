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


// []の中にkeyof演算子を利用できる
// type T = string | number
type T1 = Person[keyof Person];


// []の中に別の型を指定できる
type T3 = "name" | "age";
type T4 = Person[T3];


// 存在しない型はコンパイルエラー
// Property 'x' does not exist on type 'Person'.
// type T5 = Person["x"];


// typeo演算子と配列[number]を使うと
// 配列リテラルの要素の型を取得できる
const MyArray = [
	{ name: "Alice", age: 20 },
	{ name: "Bob", age: 21 }
];
// type Person2 = {
//   name: string;
//   age: number;
// }
type Person2 = typeof MyArray[number];
// type Age2 = number
type Age2 = typeof MyArray[number]["age"];
