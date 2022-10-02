import {
	IPv4,
	IPv4ArgumentError
} from "./ipv4.ts"
import {
	assertEquals,
	assertThrows,
} from "testing/asserts.ts";


Deno.test("IPv4.toDecimalString_10進数表現を取得できる", async (context) => {
	const testData: [IPv4, string][] = [
		// [source, expected]
		[new IPv4([0, 0, 0, 0]), "0.0.0.0"],
		[new IPv4([192, 168, 0, 1]), "192.168.0.1"]
	];

	for (const [source, expected] of testData) {
		await context.step(`IPv4.toDecimalString: "${source.toDecimalString()}" => "${expected}"`, () => {
			// Arrange
			// Act
			const actual = source.toDecimalString();

			// Assert
			assertEquals(actual, expected);
		});
	}
});


Deno.test("IPv4.toBinary_10進数表現を2進数表現に変換できる", async (context) => {
	const testData = [
		// [source, expected]
		["0", "00000000.00000000.00000000.00000000"],
		["0./", "0./"]
	];

	for (const [source, expected] of testData) {
		// todo:
		await context.step(`IPv4.toBinary("${source}") => "${expected}"`, () => {
			// Arrange
			// Act
			const actual = IPv4.toBinary(source);
			// Assert
			assertEquals(actual, expected);
		});
	}
});

Deno.test("IPv4.toBinary_変換できず例外が発生する", async (context) => {
	const testData = [
		// source
		"",
		// 「0-9./」以外の文字列が含まれている
		"abc",
		"@",
		//
		"0.0.0.0.0",
		"0.0.0.0//0",
	];

	for (const source of testData) {
		await context.step(`IPv4.toBinary("${source}") => thrown IPv4ArgumentError`, () => {
			// Arrange
			// Act
			// Assert
			const error = assertThrows(
				() => {
					IPv4.toBinary(source);
				},
				IPv4ArgumentError);

			console.log(error.message);
		});
	}
});
