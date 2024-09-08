import {
	assertEquals,
	assertExists
} from "testing/asserts.ts";

Deno.test("Response.error_生成させれるインスタンスを確認する", () => {
	// Arrange
	// Act
	const acutal = Response.error();

	// Assert
	assertEquals(acutal.status, 0);

	// ヘッダー
	assertExists(acutal.headers)
	assertEquals(acutal.headers.keys.length, 0)

	// ボディ
	// todo:
});
