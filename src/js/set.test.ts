import {
	assertEquals
} from "testing/asserts.ts";

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/values
Deno.test("values_挿入順に取得できる", () => {
	// Arrange
	const set = new Set([5, 4, 3]);
	set.add(2);
	set.add(1);
  
	// Act
	const values = [...set.values()];
  
	// Assert
	// 挿入した順に取得できる
	assertEquals(values, [5, 4, 3, 2, 1]);
});

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/keys
Deno.test("keys_valuesと同じ値を取得できる", () => {
	// Arrange
	const set = new Set([1, 3, 2, 5, 4]);

	// Act
	const keys = [...set.keys()];
	const values = [...set.values()];
  
	// Assert
	// 挿入した順じ取得できる
	assertEquals(keys, [1, 3, 2, 5, 4]);
	assertEquals(values, [1, 3, 2, 5, 4]);
});

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