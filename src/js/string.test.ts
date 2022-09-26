import {
	assertEquals
} from "testing/asserts.ts";

// String.padStart
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
Deno.test("String.padStart_文字列の左側から0埋めできる", async (context) => {
	const testData = [
		// [source, expected]
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

// String.split
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split
Deno.test("String.split_文字列をdotで分割する動きを確認する", async (context) => {
	const testData: [string, string[]][] = [
		// [source, expected]
		["", [""]],
		[".", ["", ""]],
		["..", ["", "", ""]]
	];
	for (const [source, expected] of testData) {
		await context.step(`"${source}".split(".") => "${expected}"`, () => {
			// Arrange
			// Act
			const actual = source.split(".");

			// Assert
			assertEquals(actual, expected);
		});
	}
});

