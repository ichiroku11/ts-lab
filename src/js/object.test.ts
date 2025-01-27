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
