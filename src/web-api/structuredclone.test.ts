import {
	assert,
	assertEquals
} from "testing/asserts.ts";

// https://developer.mozilla.org/ja/docs/Web/API/structuredClone
Deno.test("structuredClone_確認する", () => {
	// Arrange
	const original = { name: "xyz" };

	// Act
	const actual = structuredClone(original);

	// Assert
	// 同じインスタンスではない
	assert(original !== actual);
	// 同じプロパティと値を持っている
	assertEquals(original, actual);
});
