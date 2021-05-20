// https://deno.land/manual@main/testing
// https://deno.land/manual@main/testing/assertions

import {
	assertEquals,
	assertNotEquals,
	assertExists
} from "https://deno.land/std/testing/asserts.ts";

Deno.test("assertEquals_2つの引数が等しいか検証する", () => {
	// number
	assertEquals(1, 1);

	// boolean
	assertEquals(true, true);

	// string
	assertEquals("x", "x");
});

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

Deno.test("assertExists_null、undefined以外かどうかを検証する", () => {
	// nullかundefinedだと失敗する
	//assertExists(null);
	//assertExists(undefined);
	assertExists(false);
	assertExists(0);
	assertExists("");
});

// assertStringIncludes
// assertArrayIncludes
// assertMatch
// assertNotMatch
// assertObjectMatch
// assertThrows
// assertThrowsAsync
