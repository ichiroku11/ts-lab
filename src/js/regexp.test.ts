import {
	assertEquals
} from "testing/asserts.ts";

// RegExp.test
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Deno.test(`RegExp.test_数字と"."と"/"にマッチする文字列を確認する`, async (context) => {
	const testData: [string, boolean][] = [
		// [source, expected]
		["0", true],
		["9", true],
		[".", true],
		["/", true],
		["a", false]
	];

	const regexp = /[0-9\.\/]/;

	for (const [source, expected] of testData) {
		await context.step(`${regexp}.test("${source}") => ${expected}`, () => {
			// Arrange
			// Act
			const actual = regexp.test(source);

			// Assert
			assertEquals(actual, expected);
		});
	}
});
