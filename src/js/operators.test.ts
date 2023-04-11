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

// 論理積
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_AND
// x && y
// xを真偽値に変換した結果がfalseならばxを返し、trueならばyを返す
Deno.test("LogicalAnd_真偽値以外も扱える1", () => {
	// Arrange
	// Act
	const actual = 1 && 0;

	// Assert
	assertEquals(actual, 0);
});
Deno.test("LogicalAnd_真偽値以外も扱える2", () => {
	// Arrange
	// Act
	const actual = "" && "a";

	// Assert
	assertEquals(actual, "");
});

// 論理和
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR
// x || y
// xを真偽値に変換した結果がtrueならばxを返し、falseならばyを返す
Deno.test("LogicalOr_真偽値以外も扱える1", () => {
	// Arrange
	// Act
	const actual = 1 || 0;

	// Assert
	assertEquals(actual, 1);
});
Deno.test("LogicalOr_真偽値以外も扱える2", () => {
	// Arrange
	// Act
	const actual = "" || "a";

	// Assert
	assertEquals(actual, "a");
});
