import {
	assertThrows
} from "testing/asserts.ts";

// BigInt
// コンストラクターを関数として呼び出してBigIntに変換する
Deno.test("BigInt_整数に変換できない（引数に文字列を指定した）場合はSyntaxErrorが発生する", () => {
	// Arrange
	// Act
	// Assert
	const error = assertThrows(
		() => {
			BigInt("abc");
		},
		SyntaxError);
	console.log(error.message);
});

Deno.test("BigInt_整数に変換できない（引数に少数を指定した）場合はRangeErrorが発生する", () => {
	// Arrange
	// Act
	// Assert
	const error = assertThrows(
		() => {
			BigInt(1.5);
		},
		RangeError);
	console.log(error.message);
});
