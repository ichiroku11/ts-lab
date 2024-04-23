import {
	assert,
	assertEquals,
	assertRejects,
	assertStrictEquals,
} from "testing/asserts.ts";

// 参考
// https://azu.github.io/promises-book/
// https://typescriptbook.jp/reference/asynchronous/promise
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Using_promises

Deno.test("Promise.constructor_コンストラクターで処理が成功したインスタンスを生成する", async () => {
	// Arrange
	// Act
	const promise = new Promise((resolve, _) => {
		resolve(1);
	});

	// Assert
	assert(promise instanceof Promise);
	assertStrictEquals(1, await promise);
});

// Promise.resolve
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
Deno.test("Promise.resolve_処理が成功したインスタンスを生成する", async () => {
	// Arrange
	// Act
	const actual = await Promise.resolve(1);
	// 以下のシンタックスシュガー
	//const actual = new Promise(resolve => resolve(1));

	// Assert
	assertStrictEquals(1, actual);
});

// Promise.reject
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
Deno.test("Promise.reject_処理が失敗したインスタンスを生成する", async () => {
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

// Promise.all
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
Deno.test("Promise.all_すべての処理が成功したときに成功するインスタンスを生成する", async () => {
	// Arrange
	// Act
	const actual = await Promise.all([Promise.resolve(1), "x", Promise.resolve(true)]);

	// Assert
	assertEquals(actual, [1, "x", true]);
});

Deno.test("Promise.all_どれか1つでも失敗すると失敗するインスタンスを生成する", async () => {
	// Arrange
	// Act
	// Assert
	await assertRejects(
		() => Promise.all([Promise.resolve(1), Promise.reject(new Error("error!"))]),
		Error,
		"error!");
});

// Promise.finally
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
Deno.test("Promise.finally_Promiseを返しプロミスチェーンができるが返した値は使われない", async () => {
	// Arrange
	// Act
	const actual = await Promise.resolve(2)
		// プロミスチェーンはできるが、finallyで返した値は使われない
		.finally(() => 3)
		.then(value => value * 2);

	// Assert
	assertStrictEquals(actual, 4);
});

// Promise.then
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
Deno.test("Promise.then_返した値をPromiseから取得できる", async () => {
	// Arrange
	// Act
	const actual = await Promise.resolve(1)
		.then(value => value * 2);

	// Assert
	assertEquals(2, actual);
});

Deno.test("Promise.then_Promiseを返した場合でもPromiseのネストにはならない", async () => {
	// Arrange
	// Act
	const promise = Promise.resolve(1)
		.then(value => Promise.resolve(value * 2));

	// Assert
	assert(promise instanceof Promise);
	assertEquals(2, await promise);
});
