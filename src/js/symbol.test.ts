import {
	assertEquals
} from "testing/asserts.ts";

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol
Deno.test("Symbol_シンボル関数", async (context) => {
	await context.step("インスタンスの型は\"symbol\"", () => {
		// Arrange
		const symbool = Symbol();

		// Act
		const actual = typeof symbool;;

		// Assert
		assertEquals(actual, "symbol");
	});
});