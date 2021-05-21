// https://deno.land/manual@main/testing
// https://deno.land/manual@main/testing/assertions

import {
	assertEquals,
	assertNotEquals,
	assertExists,
	assertStringIncludes,
	assertArrayIncludes
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
	// nullかundefinedだと失敗する
	//assertExists(null);
	//assertExists(undefined);
	assertExists(false);
	assertExists(0);
	assertExists("");
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

// todo:
// assertMatch
// assertNotMatch
// assertObjectMatch
// assertThrows
// assertThrowsAsync
