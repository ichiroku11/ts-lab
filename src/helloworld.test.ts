// https://deno.land/manual@main/testing
// https://deno.land/manual@main/testing/assertions

import {
	assert
} from "testing/asserts.ts";

Deno.test("Hello Test", () => {
	assert("Hello");
});
