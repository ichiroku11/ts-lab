import {
	assertEquals
} from "testing/asserts.ts";

// parseInt
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/parseInt
Deno.test("parseInt_2進数文字列をパースする", async (context) => {
	const testData: [string, number][] = [
		// [source, expected]
		["00001111", 15],
		["11111111", 255],
	];

	for (const [source, expected] of testData) {
		await context.step(`parseInt("${source}") => ${expected}`, () => {
			// Arrange
			// Act
			const actual = parseInt(source, 2);
			// Assert
			assertEquals(actual, expected);
		});
	}
});
