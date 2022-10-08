import {
	assertEquals
} from "testing/asserts.ts";

// Number.toString
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
Deno.test("Number.toString_2進数表記の文字列を取得する", async (context) => {
	const testData = [
		// [source, expected]
		[0, "0"],
		[1, "1"],
		[255, "11111111"]
	];

	for (const [source, expected] of testData) {
		await context.step(`${source}.toString(2) => "${expected}"`, () => {
			// Arrange
			// Act
			const actual = source.toString(2);
			// Assert
			assertEquals(actual, expected);
		});
	}
});
