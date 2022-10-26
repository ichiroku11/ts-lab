import {
	assertEquals
} from "testing/asserts.ts";

// Promise.resolve
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
Deno.test("Promise.resolve_動きを確認する", async () => {
	// Arrange
	// Act
	const actual = await Promise.resolve(1);
	// 以下のシンタックスシュガー
	//const actual = new Promise(resolve => resolve(1));

	// Assert
	assertEquals(1, actual);
});
