import {
	assertEquals
} from "testing/asserts.ts";

// https://web.dev/blog/set-methods
Deno.test("intersection", async (context) => {
	await context.step("両方の要素を含むSetを返す", () => {
		// Arrange
		const set1 = new Set([1, 2, 3]);
		const set2 = new Set([2, 3, 4]);

		// Act
		const actual1 = set1.intersection(set2);
		const actual2 = set2.intersection(set1);

		// Assert
		assertEquals([...actual1], [2, 3]);
		assertEquals([...actual2], [2, 3]);
	});

	await context.step("空のSetを指定すると空のSetを返す", () => {
		// Arrange
		const set1 = new Set([1, 2, 3]);
		const set2 = new Set();
	
		// Act
		const actual1 = set1.intersection(set2);
		const actual2 = set2.intersection(set1);
	
		// Assert
		assertEquals([...actual1], []);
		assertEquals([...actual2], []);
	});
});
