
import {
	assert,
} from "testing/asserts.ts";

Deno.test("TestContext.step_ステップを確認する", async (context) => {
	await context.step("ステップ1", () => {
		assert(true);
	});

	await context.step("ステップ2", () => {
		assert(true);
	});

	await context.step("ステップ3", () => {
		assert(true);
	});
});

Deno.test("TestContext.step_ステップをforofで確認する", async (context) => {
	for (const step of [1, 2, 3]) {
		await context.step(`ステップ${step}`, () => {
			assert(true);
		});
	}
});
