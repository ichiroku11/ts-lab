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

// 書籍「TypeScript入門」p.281より
// typeofとkeyofを組み合わせて、変数からオブジェクトのプロパティ名を取得する
const mmConversions = {
	mm: 1,
	m: 1000,
	km: 1000 * 1000,
};
// type Unit = "mm" | "m" | "km"
type Unit = keyof typeof mmConversions;
function convertUnit(value: number, from: Unit, to: Unit): number {
	const valueMm = value * mmConversions[from];
	return valueMm / mmConversions[to];
}

Deno.test("keyof-type-operator_convertUnit関数の動きを確認する", async (context) => {
	const testData: [number, Unit, Unit, number][] = [
		// number, Unit, Unit, number
		[1, "mm", "mm", 1],
		[1, "m", "mm", 1000],
		[1, "km", "mm", 1000 * 1000],
		[10, "mm", "mm", 10],
		[10, "m", "mm", 1000 * 10],
		[10, "km", "mm", 1000 * 1000 * 10],
		[1, "mm", "m", 1 / 1000],
		[1, "mm", "km", 1 / (1000 * 1000)],

	];

	for (const [source, from, to, expected] of testData) {
		await context.step(`convertUnit(${source}, "${from}", "${to}")} => ${expected}`, () => {
			// Arrange
			// Act
			const actual = convertUnit(source, from, to);

			// Assert
			assertStrictEquals(actual, expected);
		});
	}
});
