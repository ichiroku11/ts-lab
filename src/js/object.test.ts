import { assertEquals } from "testing/asserts.ts";

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
Deno.test("Object.getOwnPropertyNames", async (context) => {
	await context.step("プロパティ名を取得する", () => {
		// Arrange
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		};

		// Act
		const actual = Object.getOwnPropertyNames(obj);

		// Assert
		assertEquals(actual, ["a", "b", "c"]);
	});
});

Deno.test("Object.getOwnPropertySymbols", async (context) => {
	await context.step("シンボルプロパティを配列として取得する", () => {
		// Arrange
		const a = Symbol.for("a");
		const b = Symbol.for("b");

		const obj = {
			[a]: 1,
			[b]: 2,
		};

		// Act
		const actual = Object.getOwnPropertySymbols(obj);

		// Assert
		// todo: 並び順？
		assertEquals(actual, [a, b]);
	});

	await context.step("シンボルプロパティが存在しないオブジェクトを引数に指定すると戻り値は空配列", () => {
		// Arrange
		const obj = {
		};

		// Act
		const actual = Object.getOwnPropertySymbols(obj);

		// Assert
		assertEquals(actual.length, 0);
	});
});