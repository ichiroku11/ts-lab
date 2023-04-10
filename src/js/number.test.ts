import {
	assert,
	assertEquals,
	assertFalse
} from "testing/asserts.ts";

// Number
// コンストラクターを関数として呼び出してbooleanを数値に変換する
Deno.test("Number_booleanを数値に変換する", async (context) => {
	const testData: [boolean, number][] = [
		// [source, expected]
		[true, 1],
		[false, 0]
	];
	for (const [source, expected] of testData) {
		await context.step(`Number(${source}) => ${expected}`, () => {
			// Arrange
			// Act
			const actual = Number(source);

			// Assert
			assertEquals(actual, expected);
		});
	}
});

// Number
// コンストラクターを関数として呼び出して文字列を数値に変換する
Deno.test("Number_引数を数字に変換できない場合はNaNになる", () => {
	// Arrange
	// Act
	const result = Number("abc");

	// Assert
	assert(Number.isNaN(result));
});

// Number
Deno.test("Number_nullは0になる", () => {
	// Arrange
	// Act
	const result = Number(null);

	// Assert
	assertEquals(result, 0);
});

// Number
Deno.test("Number_undefinedはNaNになる", () => {
	// Arrange
	// Act
	const result = Number(undefined);

	// Assert
	assert(Number.isNaN(result));
});

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

Deno.test("NaN_何かと比較すると常にfalseを返す", () => {
	// Arrange
	// Act
	// Assert

	// deno-lint-ignore use-isnan
	assertFalse(0 > NaN);

	// deno-lint-ignore use-isnan
	assertFalse(0 <= NaN);

	// コンパイルエラーになるので省略
	//assertFalse(value === NaN);
});