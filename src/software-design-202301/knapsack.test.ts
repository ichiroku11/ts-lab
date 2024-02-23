import {
	assertEquals
} from "testing/asserts.ts";

// 品物
type Item = {
	// 価値
	value: number,
	// 重量
	weight: number,
};

// 空き容量capacityのナップサックに
// 品物indexから品物count - 1を入れる場合の最大価値を算出する
function knapsack(items: readonly Readonly<Item>[], index: number, capacity: number): number {
	// 3. 問題の解が自明な場合は再帰呼び出しを行なわないようにする
	if (index >= items.length) {
		// 品物は存在しない
		return 0;
	}

	if (items[index].weight > capacity) {
		// 品物indexはナップサックに入らない

		// 1. 問題を1段階簡単にしたうえで再帰呼び出しを行う
		// 品物indexをナップサックに入れない場合の最大価値を取得
		const value = knapsack(items, index + 1, capacity);

		// 2. 再帰呼び出しの結果を利用して問題を1段階だけ解く
		// 品物indexはナップサックに入らないので入れる場合の価値は考慮不要

		return value;
	}

	// 1. 問題を1段階簡単にしたうえで再帰呼び出しを行う
	// 品物indexをナップサックに入れない場合の最大価値を取得
	const value1 = knapsack(items, index + 1, capacity);

	// 品物indexをナップサックに入れる場合の最大価値を取得
	const value2 = knapsack(items, index + 1, capacity - items[index].weight);

	// 2. 再帰呼び出しの結果を利用して問題を1段階だけ解く
	// 品物indexを入れる場合と入れない場合との大きい方の価値を取得
	return Math.max(value1, value2 + items[index].value);
}

Deno.test("knapsack", () => {
	// Arrange
	// ナップサックの容量
	const capacity = 5;

	// ナップサックに入れる品物
	const items: Item[] = [
		{ value: 2, weight: 2 },
		{ value: 4, weight: 2 },
		{ value: 3, weight: 3 }
	];

	// Act
	const actual = knapsack(items, 0, capacity);

	// Assert
	assertEquals(actual, 7);
});