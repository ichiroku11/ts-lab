import {
	assertEquals
} from "testing/asserts.ts";

// Array.at
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at
Deno.test(`Array.at_引数に"-1"を指定して配列の最後の要素を取得する`, () => {
	// Arrange
	// Act
	// 最後の要素を取得する
	// length - 1とする必要がない
	const actual = [1, 2, 3, 4, 5].at(-1);

	// Assert
	assertEquals(actual, 5);
});

Deno.test("Array.at_引数に範囲外の値を指定するとundefined", () => {
	// Arrange
	// Act
	// Assert
	assertEquals([].at(0), undefined);
	assertEquals([].at(-1), undefined);
});
