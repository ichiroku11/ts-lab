import {
	assertEquals
} from "testing/asserts.ts";

// インターセクション型：複数の型を組み合わせた型「どれも」
// https://typescriptbook.jp/reference/values-types-variables/intersection

type Vector2 = {
	x: number;
	y: number;
};

type Vector3 = Vector2 & {
	z: number;
};

Deno.test("intersection_動きを確認する", () => {
	// Arrange
	// Act
	const vector: Vector3 = {
		x: 1,
		y: 2,
		z: 3,
	};

	// Assert
	assertEquals(vector.x, 1);
	assertEquals(vector.y, 2);
	assertEquals(vector.z, 3);
});
