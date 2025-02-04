import {
	assert,
	assertEquals,
	assertFalse
} from "testing/asserts.ts";

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol
Deno.test("Symbol_動きを確認する", async (context) => {
	await context.step("インスタンスの型は\"symbol\"", () => {
		// Arrange
		const symbool = Symbol();

		// Act
		const actual = typeof symbool;

		// Assert
		assertEquals(actual, "symbol");
	});

	await context.step("シンボルは一意", () => {
		// Arrange
		// Act
		const actual = Symbol() === Symbol();

		// Assert
		assertFalse(actual);
	});

	await context.step("シンボルは一意その2", () => {
		// Arrange
		// Act
		const actual = Symbol("x") === Symbol("x");

		// Assert
		assertFalse(actual);
	});	
});

Deno.test("Symbol.for", async (context) => {
	await context.step("同一シンボルを取得できる", () => {
		// Arrange
		// Act
		const actual = Symbol.for("x") === Symbol.for("x");

		// Assert
		assert(actual);
	});
});

Deno.test("Symbol.keyFor", async (context) => {
	await context.step("シンボルのキーを取得できる", () => {
		// Arrange
		const symbol = Symbol.for("x");

		// Act
		const actual = Symbol.keyFor(symbol);

		// Assert
		assertEquals(actual, "x");
	});
});