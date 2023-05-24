import {
	assert,
	assertEquals,
	assertFalse
} from "testing/asserts.ts";

// 分割代入
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
Deno.test("DestructuringAssignment_配列の分割代入", async (context) => {
	await context.step("残余要素に代入する要素がない場合は空配列になる", () => {
		// Arrange
		// Act
		const [value, ...rest] = [1];
	
		// Assert
		assertEquals(value, 1);
		assertEquals(rest, []);
	});
});

Deno.test("DestructuringAssignment_オブジェクトの分割代入", async (context) => {
	await context.step("プロパティ名と同じ変数名に代入する", () => {
		// Arrange
		const obj = { x: 1, y: "a", z: true };

		// Act
		const { x, y }  = obj;

		// Assert
		assertEquals(x, 1);
		assertEquals(y, "a");
	});

	await context.step("プロパティ名と異なる変数名に代入する", () => {
		// Arrange
		const obj = { x: 1, y: "a", z: true };

		// Act
		// プロパティ名: 変数名
		const { x: a, y: b }  = obj;

		// Assert
		assertEquals(a, 1);
		assertEquals(b, "a");
	});

	await context.step("ネストしたパターンを試す", () => {
		// Arrange
		const obj = { x: { y: "a" } };

		// Act
		// プロパティ名: パターン
		const { x: { y } }  = obj;

		// Assert
		assertEquals(y, "a");
	});

	await context.step("ネストしたパターンでプロパティ名と異なる変数名に代入する", () => {
		// Arrange
		const obj = { x: { y: "a" } };

		// Act
		// プロパティ名: パターン
		const { x: { y: value } }  = obj;

		// Assert
		assertEquals(value, "a");
	});
});

Deno.test("DestructuringAssignment_オブジェクトと配列を組み合わせた分割代入", async (context) => {
	await context.step("配列プロパティの要素を変数に代入する", () => {
		// Arrange
		const obj = { values: [1, 2, 3] };

		// Act
		// valuesの0番目、1番目を変数に代入する
		const { values: [a, b] }  = obj;

		// Assert
		assertEquals(a, 1);
		assertEquals(b, 2);
	});

	// todo: オブジェクトの配列
	await context.step("オブジェクトの配列要素のプロパティ値を変数に代入する", () => {
		// Arrange
		const values = [{ name: "a" }, { name: "b" }, { name: "c" }];

		// Act
		// valuesの0番目のオブジェクトの"name"プロパティの値を
		// 変数"x"に代入する
		const [{ name: x }]  = values;

		// Assert
		assertEquals(x, "a");
	});
});

// 論理積
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_AND
// x && y
// xを真偽値に変換した結果がfalseならばxを返し、trueならばyを返す
Deno.test("LogicalAnd_真偽値以外も扱える", async (context) => {
	await context.step("左オペランドがtrue => 右オペランドの値", () => {
		// Arrange
		// Act
		const actual = 1 && 0;

		// Assert
		assertEquals(actual, 0);
	});

	await context.step("左オペランドがfalse => 左オペランドの値", () => {
		// Arrange
		// Act
		const actual = "" && "a";

		// Assert
		assertEquals(actual, "");
	});
});

// 論理和
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR
// x || y
// xを真偽値に変換した結果がtrueならばxを返し、falseならばyを返す
Deno.test("LogicalOr_真偽値以外も扱える", async (context) => {
	await context.step("左オペランドがtrue => 左オペランドの値", () => {
		// Arrange
		// Act
		const actual = 1 || 0;

		// Assert
		assertEquals(actual, 1);
	});

	await context.step("左オペランドがfalse => 右オペランドの値", () => {
		// Arrange
		// Act
		const actual = "" || "a";

		// Assert
		assertEquals(actual, "a");
	});
});

// Null合体演算子
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
// x ?? y
// xがnullまたはundefinedのときのみyを返し、それ以外のときはxを返す
Deno.test("NullishCoalescing_真偽値以外も扱える", async (context) => {
	await context.step("左オペランドがnull => 右オペランドの値", () => {
		// Arrange
		// Act
		const actual = null ?? 1;

		// Assert
		assertEquals(actual, 1);
	});

	await context.step("左オペランドがundefined => 右オペランドの値", () => {
		// Arrange
		// Act
		const actual = undefined ?? 1;

		// Assert
		assertEquals(actual, 1);
	});

	await context.step("左オペランドがnullでもundefinedでもない => 左オペランドの値", () => {
		// Arrange
		// Act
		const actual = "a" ?? "b";

		// Assert
		assertEquals(actual, "a");
	});
});

// スプレッド構文
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Deno.test("SpreadSyntax_オブジェクトリテラルで利用する", async (context) => {
	await context.step("オブジェクトをコピーする", () => {
		// Arrange
		const obj = { x: 1 };

		// Act
		const actual = { ...obj };

		// Assert
		assert(actual !== obj);
		assertEquals(actual, { x: 1});
	});

	await context.step("オブジェクトをマージする", () => {
		// Arrange
		const obj1 = { x: 1 };
		const obj2 = { y: 2 };

		// Act
		const actual = { ...obj1, ...obj2 };

		// Assert
		assertEquals(actual, { x: 1, y: 2 });
	});

	await context.step("同じプロパティが存在するオブジェクトをマージする場合は値が上書きされる", () => {
		// Arrange
		const obj1 = { x: 1 };
		const obj2 = { x: 2 };

		// Act
		const actual = { ...obj1, ...obj2 };

		// Assert
		assertEquals(actual, { x: 2 });
	});

	await context.step("同じプロパティを先に記述すると上書きされるのでコンパイルエラーになる", () => {
		// Arrange
		const obj1 = { x: 1 };

		// Act
		// 'x' is specified more than once, so this usage will be overwritten.
		// @ts-ignore:
		const obj2 = { x : 2, ...obj1 };

		// Assert
		assertEquals(obj2.x, 1);
	});
});

// 厳密等価演算子（===）
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality
Deno.test("===_別々のオブジェクトを比較すると常にfalseになる", () => {
	// Arrange
	const obj1 = {};
	const obj2 = {};

	// Act
	// Assert
	assertFalse(obj1 === obj2);

	// オブジェクトリテラル同士を比較するとコンパイルエラーになる様子
	// This condition will always return 'false' since JavaScript compares objects by reference, not value.deno-ts(2839)
	//assertFalse({} === {});
});

// void演算子
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/void
Deno.test("void_与えられた式を評価してundefinedを返す", () => {
	// Arrange
	// Act
	const actual = void true;

	// Assert
	assertEquals(actual, undefined);
});
