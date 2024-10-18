import {
	assertThrows
} from "testing/asserts.ts";

// https://developer.mozilla.org/ja/docs/Web/API/URL

Deno.test("URL.constructor", async (context) => {
	await context.step("引数が空文字だと例外が発生する", () => {
		// Arrange
		// Act
		// Assert
		assertThrows(
			() => {
				new Request("");
			},
			TypeError,
			"Invalid URL: ''");
	});
});