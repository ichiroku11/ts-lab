import {
	assert,
	assertEquals,
	assertFalse
} from "testing/asserts.ts";

// 集合演算についての参考記事
// https://web.dev/blog/set-methods

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
	// 挿入した順に取得できる
	assertEquals(keys, [1, 3, 2, 5, 4]);
	assertEquals(values, [1, 3, 2, 5, 4]);
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection
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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union
Deno.test("union", async (context) => {
	await context.step("どちらかのSetに存在する要素を含むSetを返す", () => {
		// Arrange
		const set1 = new Set([1, 2, 3]);
		const set2 = new Set([2, 3, 4]);

		// Act
		const actual1 = set1.union(set2);
		const actual2 = set2.union(set1);

		// Assert
		// 挿入した順に取得できる
		assertEquals([...actual1], [1, 2, 3, 4]);
		assertEquals([...actual2], [2, 3, 4, 1]);
	});
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/difference
Deno.test("difference", async (context) => {
	await context.step("指定されたSetに含まれない要素を含むSetを返す", () => {
		// Arrange
		const set1 = new Set([1, 2, 3]);
		const set2 = new Set([2, 3, 4]);

		// Act
		const actual1 = set1.difference(set2);
		const actual2 = set2.difference(set1);

		// Assert
		assertEquals([...actual1], [1]);
		assertEquals([...actual2], [4]);
	});
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference
Deno.test("symmetricDifference", async (context) => {
	await context.step("両方のSetに含まれない要素を含むSetを返す", () => {
		// Arrange
		const set1 = new Set([1, 2, 3]);
		const set2 = new Set([2, 3, 4]);

		// Act
		const actual1 = set1.symmetricDifference(set2);
		const actual2 = set2.symmetricDifference(set1);

		// Assert
		assertEquals([...actual1], [1, 4]);
		assertEquals([...actual2], [4, 1]);
	});
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf
Deno.test("isSubsetOf", async (context) => {
	await context.step("Setの要素すべてが指定したSetに含まれている場合はtrueを返す", () => {
		// Arrange
		// 10以下の4の倍数と2の倍数
		const fours = new Set([4, 8]);
		const evens = new Set([2, 4, 6, 8, 10]);

		// Act
		const actual = fours.isSubsetOf(evens);

		// Assert
		assert(actual);
	});

	await context.step("Setの要素すべてが指定したSetに含まれていない場合はfalseを返す", () => {
		// Arrange
		// 10以下の2の倍数と4の倍数
		const evens = new Set([2, 4, 6, 8, 10]);
		const fours = new Set([4, 8]);

		// Act
		const actual = evens.isSubsetOf(fours);

		// Assert
		assertFalse(actual);
	});

	await context.step("同じ要素を持つSetを指定した場合はtrueを返す", () => {
		// Arrange
		const set = new Set([1, 2, 3]);
		// 登録順は異なるが・・・
		const other = new Set([3, 2, 1]);

		// Act
		const actual = set.isSubsetOf(other);

		// Assert
		assert(actual);
	});

	await context.step("空のSet同士ではtrueを返す", () => {
		// Arrange
		// Act
		const actual = new Set().isSubsetOf(new Set());

		// Assert
		assert(actual);
	});
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf
Deno.test("isSupersetOf", async (context) => {
	await context.step("指定したSetの要素すべてが自身のSetに含まれている場合はtrueを返す", () => {
		// Arrange
		// 10以下の4の倍数と2の倍数
		const evens = new Set([2, 4, 6, 8, 10]);
		const fours = new Set([4, 8]);

		// Act
		const actual = evens.isSupersetOf(fours);

		// Assert
		assert(actual);
	});

	await context.step("指定したSetの要素すべてが自身のSetに含まれていない場合はfalseを返す", () => {
		// Arrange
		// 10以下の2の倍数と4の倍数
		const fours = new Set([4, 8]);
		const evens = new Set([2, 4, 6, 8, 10]);

		// Act
		const actual = fours.isSupersetOf(evens);

		// Assert
		assertFalse(actual);
	});

	await context.step("同じ要素を持つSetを指定した場合はtrueを返す", () => {
		// Arrange
		const set = new Set([1, 2, 3]);
		// 登録順は異なるが・・・
		const other = new Set([3, 2, 1]);

		// Act
		const actual = set.isSupersetOf(other);

		// Assert
		assert(actual);
	});

	await context.step("空のSet同士ではtrueを返す", () => {
		// Arrange
		// Act
		const actual = new Set().isSupersetOf(new Set());

		// Assert
		assert(actual);
	});
});

// todo: isDisjointFrom
