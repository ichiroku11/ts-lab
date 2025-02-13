import {
	assert,
	assertEquals,
	assertInstanceOf,
	assertRejects,
	assertStrictEquals,
} from "testing/asserts.ts";

// 参考
// https://azu.github.io/promises-book/
// https://typescriptbook.jp/reference/asynchronous/promise
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Using_promises

Deno.test("Promise", async (context) => {
	await context.step("コンストラクターで処理が成功したインスタンスを生成する", async () => {
		// Arrange
		// Act
		const promise = new Promise((resolve, _) => {
			resolve(1);
		});

		// Assert
		assert(promise instanceof Promise);
		assertStrictEquals(1, await promise);
	});
});

// Promise.resolve
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
Deno.test("Promise.resolve", async (context) => {
	await context.step("処理が成功したインスタンスを生成する", async () => {
		// Arrange
		// Act
		const actual = await Promise.resolve(1);
		// 以下のシンタックスシュガー
		//const actual = new Promise(resolve => resolve(1));

		// Assert
		assertStrictEquals(1, actual);
	});
});

// Promise.reject
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
Deno.test("Promise.reject", async (context) => {
	await context.step("処理が失敗したインスタンスを生成する", async () => {
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
});

// Promise.all
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
Deno.test("Promise.all", async (context) => {
	await context.step("すべての処理が成功したときに成功するインスタンスを生成する", async () => {
		// Arrange
		// Act
		const actual = await Promise.all([Promise.resolve(1), "x", Promise.resolve(true)]);

		// Assert
		assertEquals(actual, [1, "x", true]);
	});

	await context.step("どれか1つでも失敗すると失敗するインスタンスを生成する", async () => {
		// Arrange
		// Act
		// Assert
		await assertRejects(
			() => Promise.all([Promise.resolve(1), Promise.reject(new Error("error!"))]),
			Error,
			"error!");
	});
});

// Promise.allSettled
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
Deno.test("Promise.allSettled", async (context) => {
	await context.step("成功失敗に関わらずすべての結果を含んだインスタンスを生成する", async () => {
		// Arrange
		// Act
		const actual = await Promise.allSettled([Promise.resolve(1), Promise.reject(new Error("error!"))]);

		// Assert
		assertStrictEquals(actual.length, 2);

		const actual0 = actual[0];
		assertStrictEquals(actual0.status, "fulfilled");
		assertStrictEquals(actual0.value, 1);

		const actual1 = actual[1];
		assertStrictEquals(actual1.status, "rejected");
		assertInstanceOf(actual1.reason, Error);
		assertStrictEquals(actual1.reason.message, "error!");
	});
});

// Promise.finally
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
Deno.test("Promise.finally", async (context) => {
	await context.step("成功した場合に呼び出される", async () => {
		// Arrange
		let called = false;

		// Act
		const actual = await Promise.resolve(1)
			.finally(() => called = true);

		// Assert
		assert(called);
		assertStrictEquals(actual, 1);
	});

	await context.step("失敗した場合でも呼び出される", async () => {
		// Arrange
		const called: string[] = [];

		// Act
		try {
			await Promise.reject(new Error("error!"))
				.finally(() => called.push("finally"));
		} catch (error) {
			if (error instanceof Error) {
				called.push(error.message);
			}
		}

		// Assert
		assertStrictEquals(called.length, 2);
		assertStrictEquals(called[0], "finally");
		assertStrictEquals(called[1], "error!");
	});

	await context.step("Promiseを返しプロミスチェーンができるが返した値は使われない", async () => {
		// Arrange
		// Act
		const actual = await Promise.resolve(2)
			// プロミスチェーンはできるが、finallyで返した値は使われない
			.finally(() => 3)
			.then(value => value * 2);

		// Assert
		assertStrictEquals(actual, 4);
	});
});

// Promise.then
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
Deno.test("Promise.then", async (context) => {
	await context.step("返した値をPromiseから取得できる", async () => {
		// Arrange
		// Act
		const actual = await Promise.resolve(1)
			.then(value => value * 2);

		// Assert
		assertEquals(2, actual);
	});

	await context.step("Promiseを返した場合でもPromiseのネストにはならない", async () => {
		// Arrange
		// Act
		const promise = Promise.resolve(1)
			.then(value => Promise.resolve(value * 2));

		// Assert
		assert(promise instanceof Promise);
		assertEquals(2, await promise);
	});
});

// todo:
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/try
/*
Deno.test("Promise.try", async (context) => {
});
*/