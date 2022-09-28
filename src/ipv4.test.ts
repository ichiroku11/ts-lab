
import { IPv4 } from "./ipv4.ts"
import {
	assertEquals,
	assertThrows,
} from "testing/asserts.ts";

Deno.test("IPv4.toBinary_10進数表現を2進数表現に変換できる", async (context) => {
	const testData = [
		// [source, expected]
		["0", "0"],
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
		await context.step(`IPv4.toBinary("${source}") => thrown Error`, () => {
			// Arrange
			// Act
			// Assert
			assertThrows(
				() => {
					IPv4.toBinary(source);
				},
				Error,
				"regexp");
		});
	}
});
