import {
	assertEquals
} from "testing/asserts.ts";

// Boolean
// コンストラクターを関数として呼び出してBooleanに変換する
Deno.test("Boolean_booleanに変換する", async (context) => {
	const testData: [number | bigint | string | null | undefined | Record<string, unknown>, boolean][] = [
		// [source, expected]
		// number
		// 0とNaN以外はtrue
		[1, true],
		[-1, true],
		[0, false],
		[NaN, false],

		// bigint
		// 0n以外はtrue
		[1n, true],
		[-1n, true],
		[0n, false],

		// todo:
		// string
		// null
		// undefined
		// object
	];
	for (const [source, expected] of testData) {
		await context.step(`Boolean(${source}) => ${expected}`, () => {
			// Arrange
			// Act
			const actual = Boolean(source);

			// Assert
			assertEquals(actual, expected);
		});
	}
});