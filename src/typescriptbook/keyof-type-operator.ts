import {
	assertStrictEquals
} from "testing/asserts.ts";

// keyof型演算子
// オブジェクトの型からプロパティ名を型として返す
// https://typescriptbook.jp/reference/type-reuse/keyof-type-operator

type Product = {
	name: string;
	price: number;
};

// type ProductKey = "name" | "price"
type ProductKey = keyof Product;

// あまり意味のないテスト
Deno.test("keyof-type-operator_動きを確認する", () => {
	// Arrange
	// Act
	const key1: ProductKey = "name";
	const key2: ProductKey = "price";
	
	// Assert
	assertStrictEquals(key1, "name");
	assertStrictEquals(key2, "price");
});
