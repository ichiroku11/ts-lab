import {
	assertEquals,
	assertRejects
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

// Promise.reject
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
Deno.test("Promise.reject_動きを確認する", async () => {
	// assertRejectsを使うと、Promiseから例外が発生することを確認できる
	// https://deno.land/manual@v1.26.2/testing/assertions#throws
	// Arrange
	// Act
	// Assert
	await assertRejects(
		() => Promise.reject(new Error("error!")),
		Error,
		"error!"
	);
});
