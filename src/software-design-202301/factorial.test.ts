import {
	assertEquals
} from "testing/asserts.ts";

// 再帰呼び出しで階乗を求める
function factorial(num: number): number {
	// 3. 問題の解が自明な場合は再帰呼び出しを行なわないようにする
	if (num === 0) {
		// 0!は1
		return 1;
	}

	// 1. 問題を1段階簡単にしたうえで再帰呼び出しを行なう
	const result = factorial(num - 1);

	// 2. 再帰呼び出しの結果を利用して問題を1段階だけ解く
	return num * result;
}

Deno.test("factorial_正しく階乗を求められることを確認する", async (context) => {
	const testData: [number, number][] = [
		// [source, expected]
		[0, 1],
		[1, 1],
		[2, 2],
		[3, 6],
		[4, 24],
		[5, 120]
	];
	for (const [source, expected] of testData) {
		await context.step(`${source}! => ${expected}`, () => {
			// Arrange
			// Act
			const actual = factorial(source);

			// Assert
			assertEquals(actual, expected);
		});
	}
});
