// https://deno.land/manual@main/testing
// https://deno.land/manual@main/testing/assertions

import {
	assertEquals,
	assertNotEquals,
	assertExists,
	assertStringIncludes,
	assertArrayIncludes,
	assertMatch,
	assertNotMatch,
	assertObjectMatch
} from "https://deno.land/std/testing/asserts.ts";

// assertEquals
Deno.test("assertEquals_2つの引数が等しいか検証する", () => {
	// number
	assertEquals(1, 1);

	// boolean
	assertEquals(true, true);

	// string
	assertEquals("x", "x");
});

// assertNotEquals
Deno.test("assertNotEquals_2つの引数が等しくないか検証する", () => {
	// number
	assertNotEquals(1, 2);

	// boolean
	assertNotEquals(true, false);

	// string
	assertNotEquals("x", "y");
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

// todo:
// assertThrows
// assertThrowsAsync
