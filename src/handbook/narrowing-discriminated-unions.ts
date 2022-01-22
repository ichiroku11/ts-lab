// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
// https://typescript-jp.gitbook.io/deep-dive/type-system/discriminated-unions

export const nothing = null;

// Discriminated union
// That got rid of the error! When every type in a union contains a common property with literal types,
// TypeScript considers that to be a discriminated union, and can narrow out the members of the union.

// すべてのユニオン型が共通のリテラル型のプロパティを持つとき、
// そのプロパティを使ってユニオン型のメンバーを絞り込める

interface Circle {
	kind: "circle";
	radius: number;
}

interface Square {
	kind: "square";
	sideLength: number;
}

type Shape = Circle | Square;

// Shapeの面積を求める
function getArea(shape: Shape): number {
	if (shape.kind === "circle") {
		// Circle
		return Math.PI * shape.radius ** 2;
	} else {
		// Square
		return shape.sideLength ** 2;
	}
}

// 314.***
console.log(getArea({ kind: "circle", radius: 10 }));

// 400
console.log(getArea({ kind: "square", sideLength: 20 }));
