import {
	assertEquals
} from "testing/asserts.ts";

// https://web.dev/blog/set-methods
Deno.test("intersection_両方の要素を含むSetを返す", () => {
	// Arrange
	const set1 = new Set([1, 2, 3]);
	const set2 = new Set([2, 3, 4]);

	// Act
	const actual = set1.intersection(set2);

	// Assert
	assertEquals([...actual], [2, 3]);
});
