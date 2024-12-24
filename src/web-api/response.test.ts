import {
	assertEquals,
	assertExists
} from "testing/asserts.ts";

// https://developer.mozilla.org/ja/docs/Web/API/Response

Deno.test("Response.error_生成されるインスタンスを確認する", () => {
	// Arrange
	// Act
	const acutal = Response.error();

	// Assert
	// ステータスコード
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

Deno.test("Response.json_生成されるインスタンスを確認する", () => {
	// Arrange
	// Act
	const acutal = Response.json({});

	// Assert
	// ステータスコード
	assertEquals(acutal.status, 200);

	// ヘッダー
	assertExists(acutal.headers);
	assertEquals(acutal.headers.keys.length, 0);

	// ボディ
	//todo:
});