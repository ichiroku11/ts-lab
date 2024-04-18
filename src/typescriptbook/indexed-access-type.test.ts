import {
	assertStrictEquals
} from "testing/asserts.ts";

// インデックスアクセス型
// https://typescriptbook.jp/reference/type-reuse/indexed-access-types
// lookup型とも呼ぶのかも

// オブジェクトの場合
type User = {
	name: string,
	age: number,
};
// type Type1 = string
type Type1 = User["name"];
// type Type2 = string | number
type Type2 = User["name" | "age"];
// keyof演算子とオブジェクトのすべてのプロパティ型がユニオン型で得られる
// type TYpe3 = string | number
type Type3 = User[keyof User];


// 配列の場合
type StringValues = string[];
// type Type4 = string
type Type4 = StringValues[number];


// タプルの場合
type Tuple = [string, number];
// type Type5 = string | number
type Type5 = Tuple[0 | 1];


// あまり意味のないテスト
Deno.test("indexed-access-type_動きを確認する", () => {
	// Arrange
	// Act
	const v1: Type1 = "abc";
	const v2: Type2 = "abc";
	const v3: Type3 = "abc";
	const v4: Type4 = "abc";
	const v5: Type5 = "abc";

	// Assert
	assertStrictEquals(v1, "abc");
	assertStrictEquals(v2, "abc");
	assertStrictEquals(v3, "abc");
	assertStrictEquals(v4, "abc");
	assertStrictEquals(v5, "abc");
});
