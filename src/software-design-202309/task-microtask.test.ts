import {
	assertEquals,
} from "testing/asserts.ts";

// p.39
Deno.test("タスクとマイクロタスクの実行順を確認する", async () => {
	// Arrange
	const steps: number[] = [];

	// Act
	steps.push(1);

	// setTimeoutはタスク
	const timeoutId = setTimeout(() => {
		// このtestの中では、このコールバックは呼ばれない
		steps.push(5);
	});

	// Promiseはマイクロタスク
	const promise = Promise.resolve()
		.then(() => {
			steps.push(3);
		})
		.then(() => {
			steps.push(4);
		});

	steps.push(2);

	await promise;

	// Assert
	assertEquals(steps, [1, 2, 3, 4]);

	// コールバックはキャンセルしておく
	clearTimeout(timeoutId);
});