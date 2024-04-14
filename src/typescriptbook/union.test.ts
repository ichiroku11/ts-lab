import {
	assertEquals
} from "testing/asserts.ts";

// https://typescriptbook.jp/reference/values-types-variables/union

type Rect =  {
	x: number;
	y: number;
	width: number;
	height: number;
};

type Circle = {
	x: number;
	y: number;
	radius: number;
};

// ユニオン型：複数の型のどれかの型
type Shape = Rect | Circle;

Deno.test("union_動きを確認する", () => {
	// Arrange
	// Act
	const shape1: Shape = {
		x: 1,
		y: 2,
		width: 3,
		height: 4,
	};

	const shape2: Shape = {
		x: 1,
		y: 2,
		radius: 3,
	};

	// Assert
	assertEquals(shape1.x, 1);
	assertEquals(shape1.y, 2);
	assertEquals(shape1.width, 3);
	assertEquals(shape1.height, 4);
	// Property 'radius' does not exist on type 'Rect'.
	//shape1.radius;

	assertEquals(shape2.x, 1);
	assertEquals(shape2.y, 2);
	assertEquals(shape2.radius, 3);

	// Property 'width' does not exist on type 'Rect'.
	//shape2.width
	// Property 'height' does not exist on type 'Rect'.
	//shape2.height
});
