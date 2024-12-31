import {
	assertEquals
} from "testing/asserts.ts";

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
Deno.test("ArrayBuffer.byteLength_コンストラクターで指定した値を取得できる", () => {
	// Arrange
	const buffer = new ArrayBuffer(2);

	// Act
	// Assert
	assertEquals(buffer.byteLength, 2);
});