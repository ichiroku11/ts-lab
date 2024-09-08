import {
	assertEquals,
	assertExists
} from "testing/asserts.ts";

Deno.test("Request_インスタンスを確認する", () => {
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
