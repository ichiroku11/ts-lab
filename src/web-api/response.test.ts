import {
	assertEquals,
	assertExists
} from "testing/asserts.ts";

Deno.test("Response.error_生成されるインスタンスを確認する", () => {
	// Arrange
	// Act
	const acutal = Response.error();

	// Assert
	// ステータスコードs
	assertEquals(acutal.status, 0);

	// ヘッダー
	assertExists(acutal.headers)
	assertEquals(acutal.headers.keys.length, 0)

	// ボディ
	assertEquals(acutal.body, null)
});

Deno.test("Response.redirect_生成されるインスタンスを確認する", () => {
	// Arrange
	// Act
	const acutal = Response.redirect("https://localhost");

	// Assert
	// ステータスコード
	assertEquals(acutal.status, 302);

	// ヘッダー
	assertExists(acutal.headers)
	assertEquals(acutal.headers.keys.length, 0)

	// ボディ
	assertEquals(acutal.body, null)
});
