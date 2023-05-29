import {
	assertEquals
} from "testing/asserts.ts";

Deno.test("toISOString_ISO 8601形式の文字列を取得できる", () => {
	// Arrange
	const expected = "2023-05-30T01:02:03.000Z"
	const date = new Date(expected);

	// Act
	const actual = date.toISOString();

	// Assert
	assertEquals(actual, expected);
});
