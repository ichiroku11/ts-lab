import {
	assertEquals
} from "testing/asserts.ts";

// ナップサックに入れる品物
type Item = {
	// 価値
	value: number,
	// 重量
	weight: number,
};

// 空き容量capacityのナップサックに
// index番目以降の品物を入れる場合の最大価値を算出する
// ※メモ化はしていない
function knapsack(items: readonly Readonly<Item>[], index: number, capacity: number): number {
	// 3. 問題の解が自明な場合は再帰呼び出しを行なわないようにする
	if (index >= items.length) {
		// 品物は存在しない
		return 0;
	}

	if (items[index].weight > capacity) {
		// index番目の品物はナップサックに入らない

		// 1. 問題を1段階簡単にしたうえで再帰呼び出しを行う
		// index番目の品物をナップサックに入れない場合の最大価値を取得
		const value = knapsack(items, index + 1, capacity);

		// 2. 再帰呼び出しの結果を利用して問題を1段階だけ解く
		// index番目の品物はナップサックに入らないので入れる場合の価値は考慮不要

		return value;
	}

	// 1. 問題を1段階簡単にしたうえで再帰呼び出しを行う
	// index番目の品物をナップサックに入れない場合の最大価値を取得
	const value1 = knapsack(items, index + 1, capacity);

	// index番目の品物をナップサックに入れる場合の最大価値を取得
	const value2 = knapsack(items, index + 1, capacity - items[index].weight);

	// 2. 再帰呼び出しの結果を利用して問題を1段階だけ解く
	// index番目の品物を入れる場合と入れない場合との大きい方の価値を取得
	return Math.max(value1, value2 + items[index].value);
}

Deno.test("knapsack_正しく求められることを確認する", async (context) => {
	const testData: [number, number][] = [
		// [capacity, expected]
		[3, 4],
		[4, 6],
		[5, 7],
		[6, 7],
		[7, 9],
	];

	// ナップサックに入れる品物
	const items: Item[] = [
		{ value: 2, weight: 2 },
		{ value: 4, weight: 2 },
		{ value: 3, weight: 3 }
	];

	for (const [capacity, expected] of testData) {
		await context.step(`knapsack(items, 0, ${capacity}) => ${expected}`, () => {
			// Arrange
			// Act
			const actual = knapsack(items, 0, capacity);

			// Assert
			assertEquals(actual, expected);
		});
	}	
});