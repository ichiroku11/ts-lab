import {
	assertEquals,
	assertFalse
} from "testing/asserts.ts";

// Boolean
// コンストラクターを関数として呼び出してBooleanに変換する
Deno.test("Boolean_numberとbigintをbooleanに変換する", async (context) => {
	const testData: [number | bigint, boolean][] = [
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

Deno.test("Boolean_stringをbooleanに変換する", async (context) => {
	const testData: [string, boolean][] = [
		// [source, expected]
		// string
		// 空文字（""）以外はtrue
		["", false],
		["a", true]
	];
	for (const [source, expected] of testData) {
		await context.step(`Boolean("${source}") => ${expected}`, () => {
			// Arrange
			// Act
			const actual = Boolean(source);

			// Assert
			assertEquals(actual, expected);
		});
	}
});

Deno.test("Boolean_nullをbooleanに変換するとfalse", () => {
	// Arrange
	// Act
	const result = Boolean(null);

	// Assert
	assertFalse(result);
});

Deno.test("Boolean_undefinedをbooleanに変換するとfalse", () => {
	// Arrange
	// Act
	const result = Boolean(undefined);

	// Assert
	assertFalse(result);
});

/*
// todo:
// object
*/