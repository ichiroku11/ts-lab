import {
	assertEquals,
	assertExists,
	assertThrows
} from "testing/asserts.ts";

Deno.test("Request", async (context) => {
	await context.step("生成したインスタンスを確認する", () => {
		// Arrange
		// Act
		const acutal = new Request("https://localhost");

		// Assert
		// ヘッダー
		assertExists(acutal.headers)
		assertEquals(acutal.headers.keys.length, 0)

		// ボディ
		assertEquals(acutal.body, null)
	});

	await context.step("引数が空文字だと例外が発生する", () => {
		// Arrange
		// Act
		// Assert
		assertThrows(
			() => {
				new Request("");
			},
			TypeError,
			"Invalid URL: ''");
	});
});