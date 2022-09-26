import {
	assertEquals
} from "testing/asserts.ts";

// 分割代入
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
Deno.test("DestructuringAssignment_残余要素に代入する要素がない場合は空配列になる", () => {
	// Arrange
	// Act
	const [value, ...rest] = [1];

	// Assert
	assertEquals(value, 1);
	assertEquals(rest, []);
});
