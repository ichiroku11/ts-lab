import {
	assertEquals
} from "testing/asserts.ts";

Deno.test("btoa_確認する", () => {
	// Arrange
	// Act
	const expected = btoa("a");

	// Assert
	assertEquals("YQ==", expected);
});