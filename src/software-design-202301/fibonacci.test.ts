import {
	assertEquals
} from "testing/asserts.ts";

// フィボナッチ数を求める
function fibonacci(num: number): number {
	// f(0) = 0
	if (num === 0) {
		return 0;
	}

	// f(1) = 1
	if (num === 1) {
		return 1;
	}

	// f(n) = f(n-1) + f(n-2)
	return fibonacci(num - 1) + fibonacci(num - 2);
}

Deno.test("fibonacci_正しく階乗を求められることを確認する", async (context) => {
	const testData: [number, number][] = [
		// [source, expected]
		[0, 0],
		[1, 1],
		[2, 1],
		[3, 2],
		[4, 3],
		[5, 5],
		[6, 8]
	];
	for (const [source, expected] of testData) {
		await context.step(`fibonacci(${source}) => ${expected}`, () => {
			// Arrange
			// Act
			const actual = fibonacci(source);

			// Assert
			assertEquals(actual, expected);
		});
	}
});