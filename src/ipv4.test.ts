import {
	IPv4,
	IPv4ArgumentError
} from "./ipv4.ts"
import {
	assertEquals,
	assertThrows,
} from "testing/asserts.ts";

Deno.test("IPv4.constructor_例外が発生する", async (context) => {
	const testData = [
		// source
		[-1, 0, 0, 0],
		[256, 0, 0, 0],
		[0, -1, 0, 0],
		[0, 256, 0, 0],
		[0, 0, -1, 0],
		[0, 0, 256, 0],
		[0, 0, 0, -1],
		[0, 0, 0, 256]
	];

	for (const source of testData) {
		// todo:
		await context.step(`new IPv4(${source}) => IPv4ArgumentError`, () => {
			// Arrange
			// Act
			// Assert
			const error = assertThrows(
				() => {
					new IPv4(source[0], source[1], source[2], source[3]);
				},
				IPv4ArgumentError);

			console.log(error.message);
		});
	}
});

Deno.test("IPv4.fromMaskPrefix_IPv4を生成できる", async (context) => {
	const testData: [number, string][] = [
		// [source, expected]
		[0, "0.0.0.0"],
		[8, "255.0.0.0"],
		[16, "255.255.0.0"],
		[24, "255.255.255.0"],
		[32, "255.255.255.255"]
	];

	for (const [source, expected] of testData) {
		// todo:
		await context.step(`IPv4.fromMaskPrefix(${source}) => "${expected}"`, () => {
			// Arrange
			// Act
			const actual = IPv4.fromMaskPrefix(source);

			// Assert
			assertEquals(actual.toDecimalString(), expected);
		});
	}
});

Deno.test("IPv4.fromMaskPrefix_例外が発生する", async (context) => {
	const testData = [
		// source
		-1,
		33
	];

	for (const source of testData) {
		// todo:
		await context.step(`IPv4.fromMaskPrefix(${source}) => IPv4ArgumentError`, () => {
			// Arrange
			// Act
			// Assert
			const error = assertThrows(
				() => {
					IPv4.fromMaskPrefix(source);
				},
				IPv4ArgumentError);

			console.log(error.message);
		});
	}
});


Deno.test("IPv4.fromDecimalString_IPv4に変換できる", async (context) => {
	const testData = [
		// [source, expected]
		["0", "0.0.0.0"],
		["0./", "0.0.0.0"]
	];

	for (const [source, expected] of testData) {
		// todo:
		await context.step(`IPv4.fromDecimalString("${source}") => "${expected}"`, () => {
			// Arrange
			// Act
			const actual = IPv4.fromDecimalString(source);

			// Assert
			assertEquals(actual.toDecimalString(), expected);
		});
	}
});

Deno.test("IPv4.fromDecimalString_IPv4に変換できず例外が発生する", async (context) => {
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
		await context.step(`IPv4.fromDecimalString("${source}") => IPv4ArgumentError`, () => {
			// Arrange
			// Act
			// Assert
			const error = assertThrows(
				() => {
					IPv4.fromDecimalString(source);
				},
				IPv4ArgumentError);

			console.log(error.message);
		});
	}
});

Deno.test("and_引数で指定したオブジェクトとのビット論理積を求めることができる", async(context) => {
	const testData: [IPv4, IPv4, string][] = [
		[new IPv4(1, 2, 3, 4), new IPv4(255, 255, 255, 255), "1.2.3.4"],
		[new IPv4(1, 2, 3, 4), new IPv4(255, 255, 0, 0), "1.2.0.0"],
	];

	for (const [source, other, expected] of testData) {
		await context.step(`"${source.toDecimalString()}".bitwiseAnd("${other.toDecimalString()}") => "${expected}"`, () => {
			// Arrange
			// Act
			const actual = source.and(other);

			// Assert
			assertEquals(actual.toDecimalString(), expected);
		});
	}
});

Deno.test("equals_引数で指定したオブジェクトと等しいことを判定できる", async(context) => {
	const testData: [IPv4, IPv4, boolean][] = [
		[new IPv4(1, 2, 3, 4), new IPv4(1, 2, 3, 4), true],
		[new IPv4(1, 1, 1, 1), new IPv4(1, 1, 1, 0), false],
		[new IPv4(1, 1, 1, 1), new IPv4(1, 1, 0, 1), false],
		[new IPv4(1, 1, 1, 1), new IPv4(1, 0, 1, 1), false],
		[new IPv4(1, 1, 1, 1), new IPv4(0, 1, 1, 1), false]
	];

	for (const [source, other, expected] of testData) {
		await context.step(`"${source.toDecimalString()}".equals("${other.toDecimalString()}") => ${expected}`, () => {
			// Arrange
			// Act
			const actual = source.equals(other);

			// Assert
			assertEquals(actual, expected);
		});
	}
});

Deno.test("IPv4.toBinaryString_2進数表現を取得できる", async (context) => {
	const testData: [IPv4, string][] = [
		// [source, expected]
		[new IPv4(0, 0, 0, 0), "00000000.00000000.00000000.00000000"],
		[new IPv4(192, 168, 0, 1), "11000000.10101000.00000000.00000001"],
		[new IPv4(255, 255, 255, 255), "11111111.11111111.11111111.11111111"]
	];

	for (const [source, expected] of testData) {
		await context.step(`IPv4.toBinaryString: "${source.toDecimalString()}" => "${expected}"`, () => {
			// Arrange
			// Act
			const actual = source.toBinaryString();

			// Assert
			assertEquals(actual, expected);
		});
	}
});

Deno.test("IPv4.toDecimalString_10進数表現を取得できる", async (context) => {
	const testData: [IPv4, string][] = [
		// [source, expected]
		[new IPv4(0, 0, 0, 0), "0.0.0.0"],
		[new IPv4(192, 168, 0, 1), "192.168.0.1"],
		[new IPv4(255, 255, 255, 255), "255.255.255.255"]
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
