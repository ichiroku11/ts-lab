import {
	assertEquals
} from "testing/asserts.ts";

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
Deno.test("TypedArray.name._値を確認する", () => {
	// Arrange
	// Act
	// Assert
	assertEquals(Uint8Array.name, "Uint8Array");
	assertEquals(Uint16Array.name, "Uint16Array");
	assertEquals(Uint32Array.name, "Uint32Array");
	assertEquals(Int8Array.name, "Int8Array");
	assertEquals(Int16Array.name, "Int16Array");
	assertEquals(Int32Array.name, "Int32Array");
});
