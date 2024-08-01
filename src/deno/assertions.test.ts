// https://deno.land/manual@main/testing
// https://deno.land/manual@main/testing/assertions

import {
	assert,
	assertFalse,
	assertEquals,
	assertNotEquals,
	assertExists,
	assertStringIncludes,
	assertArrayIncludes,
	assertMatch,
	assertNotMatch,
	assertObjectMatch,
	assertThrows,
	assertRejects
} from "testing/asserts.ts";

Deno.test("assert_truthyを確認する", () => {
	assert(true);
	assert(1);
	assert("a");

	// 以下はfalsyなので失敗する
	//assert(false);
	//assert(0);
	//assert("");
});

Deno.test("assertFalse_falsyを確認する", () => {
	assertFalse(false);
	assertFalse(0);
	assertFalse("");
});

// assertEquals
Deno.test("assertEquals_2つの引数が等しいか検証する", () => {
	// number
	assertEquals(1, 1);

	// boolean
	assertEquals(true, true);
	assertEquals(false, false);

	// string
	assertEquals("x", "x");

	// undefined
	assertEquals(undefined, undefined);

	// null
	assertEquals(null, null);

	// object
	// 同じプロパティ・値のオブジェクトは等しい（インスタンスが異なっていても等しい）
	assertEquals({}, {});
	assertEquals({ x: 0 }, { x: 0 });

	// 同一インスタンスは等しい
	const obj = {};
	assertEquals(obj, obj);

	// array
	assertEquals([], []);
	assertEquals([1, 2], [1, 2]);
});

// assertNotEquals
Deno.test("assertNotEquals_2つの引数が等しくないか検証する", () => {
	// number
	assertNotEquals(1, 2);

	// boolean
	assertNotEquals(true, false);

	// string
	assertNotEquals("x", "y");

	// object
	assertNotEquals({ x: 0 }, {});
	assertNotEquals({ x: 0 }, { x: 1 });

	// array
	assertNotEquals([], [1]);
	assertNotEquals([2, 1], [1, 2]);
});

// todo:
// assertStrictEquals

// assertExists
Deno.test("assertExists_null、undefined以外かどうかを検証する", () => {
	assertExists(false);
	assertExists(0);
	assertExists("");

	// nullかundefinedだと失敗する
	//assertExists(null);
	//assertExists(undefined);
});

// assertStringIncludes
Deno.test("assertStringIncludes_文字列が含まれているかを検証する", () => {
	assertStringIncludes("abcdefg", "abc");
	assertStringIncludes("あいうえお", "あい");

	// 大文字小文字は区別されるため失敗する
	//assertStringIncludes("abcdefg", "ABC");
});

// assertArrayIncludes
Deno.test("assertArrayIncludes_配列に要素が含まれているかを検証する", () => {
	assertArrayIncludes([1, 2, 3], [1]);
	assertArrayIncludes([1, 2, 3], [1, 2]);
	assertArrayIncludes([1, 2, 3], [1, 2, 3]);

	assertArrayIncludes(["a", "b", "c"], ["a", "c"]);

	// コンパイルエラー
	//assertArrayIncludes([1, 2, 3], 1);
});

// assertMatch
Deno.test("assertMatch_正規表現にマッチするかを検証する", () => {
	assertMatch("abcdefg", /^abc.+/);
});

// assertNotMatch
Deno.test("assertNotMatch_正規表現にマッチしないかを検証する", () => {
	assertNotMatch("abcdefg", /^b.+/);
});

// assertObjectMatch
Deno.test("assertObjectMatch_actualで指定したオブジェクトがexpectedで指定したオブジェクトのサブセットかを検証する", () => {
	assertObjectMatch({}, {});

	assertObjectMatch({ x: 0 }, { x: 0 });
	assertObjectMatch({ x: 1, y: 1 }, { x: 1 });

	// xの値が異なるため、アサートに失敗する
	// assertObjectMatch({ x: "" }, { x: 0 });
	// assertObjectMatch({ x: 1 }, { x: 0 });
});

// assertThrows
Deno.test("assertThrows_エラーが発生したことを検証する", () => {
	assertThrows(
		() => {
			throw new Error("Error!!");
		},
		Error,
		"Error!!");
});

// assertRejects
Deno.test("assertRejects_エラーが発生したことを検証する", async () => {
	await assertRejects(
		() => {
			return Promise.reject(new Error("Error!!"));
			// こっちでもOK
			/*
			return new Promise(() => {
				throw new Error("Error!!");
			});
			*/
		},
		Error,
		"Error!!");
});
