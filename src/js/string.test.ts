import {
	assertEquals
} from "testing/asserts.ts";

// String.match
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/match
Deno.test(`String.match_文字列に含まれている"."の数を数える`, async (context) => {
	const testData: [string, number | undefined][] = [
		// [source, expected]
		["0", undefined],
		[".", 1],
		["0.0.", 2],
		["0.0.0.0", 3],
	];

	// Arrange
	const regexp = /\./g;

	for (const [source, expected] of testData) {
		await context.step(`"${source}".match(${regexp})?.length => ${expected}`, () => {
			// Arrange
			// Act
			const actual = source.match(regexp)?.length;

			// Assert
			assertEquals(actual, expected);
		});
	}
});

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

// String.repeat
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Deno.test("String.repeat_文字列を指定した数だけ繰り返した文字列を取得できる", async (context) => {
	const testData: [string, number, string][] = [
		// [source, count, expected]
		["1", 0, ""],
		["1", 8, "11111111"]
	];
	for (const [source, count, expected] of testData) {
		await context.step(`"${source}".repeat(${count}) => "${expected}"`, () => {
			// Arrange
			// Act
			const actual = source.repeat(count);

			// Assert
			assertEquals(actual, expected);
		});
	}
});

// String.slice
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Deno.test(`String.slice_部分文字列を取り出す`, async (context) => {
	const source = "0123456789";

	const testData: [number, number | undefined, string][] = [
		// [start, endex, pected]
		[0, 1, "0"],
		[1, 3, "12"],
		[1, 4, "123"],
		[2, 4, "23"],
		[5, undefined, "56789"],
	];

	for (const [start, end, expected] of testData) {
		await context.step(`"${source}".slice(${start}, ${end}) => "${expected}"`, () => {
			// Arrange
			// Act
			const actual = source.slice(start, end);

			// Assert
			assertEquals(actual, expected);
		});
	}
});

// String.split
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split
Deno.test(`String.split_文字列を"."で分割する動きを確認する`, async (context) => {
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
