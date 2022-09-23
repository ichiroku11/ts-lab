import {
	assertEquals
} from "testing/asserts.ts";

// String.padStart
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
Deno.test("padStart_文字列の左側から0埋めできる", async (context) => {
	const testData = [
		// [srouce, expected]
		["1", "00000001"],
		["11111111", "11111111"]
	];

	for (const [source, expected] of testData) {
		await context.step(`"${source}".pardStart(8, "0") => "${expected}"`, () => {
			// Arrange
			// Act
			const actual = source.padStart(8, "0");

			// Assert
			assertEquals(actual, expected);
		});
	}
});

