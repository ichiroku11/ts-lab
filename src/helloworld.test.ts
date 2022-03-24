// https://deno.land/manual@main/testing
// https://deno.land/manual@main/testing/assertions

import {
	assert
} from "https://deno.land/std@0.131.0/testing/asserts.ts";

Deno.test("Hello Test", () => {
	assert("Hello");
});
