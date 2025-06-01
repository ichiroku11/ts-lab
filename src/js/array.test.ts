import {
	assertEquals
} from "testing/asserts.ts";

// Constructor
Deno.test("Array", async (context) => {
	await context.step("引数が複数の場合は要素を指定したことになる", () => {
		// Arrange
		// Act
		// deno-lint-ignore no-array-constructor
		const array = new Array(1, 2, 3);

		// Assert
		assertEquals(array.length, 3);
		assertEquals(array[0], 1);
		assertEquals(array[1], 2);
		assertEquals(array[2], 3);
	});

	await context.step("引数が1つの場合は要素数を指定したことになる", () => {
		// Arrange
		// Act
		// 紛らわしい...
		const array = new Array(3);

		// Assert
		assertEquals(array.length, 3);
		assertEquals(array[0], undefined);
		assertEquals(array[1], undefined);
		assertEquals(array[2], undefined);
	});
});

// Array.at
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at
Deno.test("Array.at", async (context) => {
	await context.step(`引数に"-1"を指定して配列の最後の要素を取得する`, () => {
		// Arrange
		// Act
		// 最後の要素を取得する
		// length - 1とする必要がない
		const actual = [1, 2, 3, 4, 5].at(-1);

		// Assert
		assertEquals(actual, 5);
	});

	await context.step("引数に範囲外の値を指定するとundefined", () => {
		// Arrange
		// Act
		// Assert
		assertEquals([].at(0), undefined);
		assertEquals([].at(-1), undefined);
	});
});

// todo: values
