// keyof and Lookup Types
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types

export const nothing = null;

interface Person {
	name: string;
	age: number;
	location: string;
}

// keyof T演算子を使うと、Tのプロパティ名の文字列リテラル型の合併として取得できる

// PersonKeys型には以下だけを指定できる
// "name" | "age" | "location"
type PersonKeys = keyof Person;
const value: PersonKeys = "age";
console.log(value);


// Lookup types
// プロパティの値の型を取得できる？
// PersonNameは、string
// PersonAgeは、number
type PersonName = Person["name"];
type PersonAge = Person["age"];
const name: PersonName = "abc";
const age: PersonAge = 1;
console.log(name);
console.log(age);
