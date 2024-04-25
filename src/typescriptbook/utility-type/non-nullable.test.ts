import {
	assertEquals
} from "testing/asserts.ts";

// 型からnull、undefinedを除くユーティリティ型
// https://typescriptbook.jp/#nonnullable

type Type1 = string | null | undefined;
// type Type2 = string;
type Type2 = NonNullable<Type1>;


// あまり意味のないテスト
Deno.test("non-nullable_動きを確認する", () => {
	// Arrange
	// Act
	const t2: Type2 = "abc"

	// Assert
	assertEquals(t2, "abc");
});
