import {
	assert,
	assertEquals,
	assertFalse,
	assertInstanceOf
} from "testing/asserts.ts";

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol
Deno.test("Symbol_動きを確認する", async (context) => {
	await context.step("インスタンスの型は\"symbol\"", () => {
		// Arrange
		const symbool = Symbol();

		// Act
		const actual = typeof symbool;

		// Assert
		assertEquals(actual, "symbol");
	});

	await context.step("シンボルは一意", () => {
		// Arrange
		// Act
		const actual = Symbol() === Symbol();

		// Assert
		assertFalse(actual);
	});

	await context.step("シンボルは一意その2", () => {
		// Arrange
		// Act
		const actual = Symbol("x") === Symbol("x");

		// Assert
		assertFalse(actual);
	});	
});

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
Deno.test("Symbol.hasInstance", async (context) => {
	class MyArray1 {
	}

	class MyArray2 {
		// instanceof演算子で呼び出されるメソッドを定義する
		static [Symbol.hasInstance](instance: unknown): boolean {
			return Array.isArray(instance);
		}
	}

	await context.step("instanceof演算子で呼び出されるメソッドが存在しない場合の動きを確認する", () => {
		// Arrange
		// Act
		// Assert
		// instanceof演算子で呼び出されるメソッドがないため、false
		assertFalse([] instanceof MyArray1);
	});

	await context.step("instanceof演算子で呼び出されるメソッドが存在する場合の動きを確認する", () => {
		// Arrange
		// Act
		// Assert
		// instanceof演算子で呼び出されるメソッドがあるため、true
		assert([] instanceof MyArray2);
	});
});

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
Deno.test("Symbol.iterator", async (context) => {
	await context.step("配列からイテレータープロトコルに準拠するオブジェクトを返すメソッドを取得できる", () => {
		// Arrange
		const array = [1, 2, 3];

		// Act
		const iterator = array[Symbol.iterator];

		// Assert
		assertInstanceOf(iterator, Function);
	});

	await context.step("反復可能プロトコルに準拠するオブジェクトを実装する", () => {
		// Arrange
		const obj = {
			// イテレータープロトコルに準拠するオブジェクトを返す
			[Symbol.iterator]: function*() {
				yield 1;
				yield 2;
				yield 3;
			}
		};
		const actual: number[] = [];

		// Act
		for (const value of obj) {
			actual.push(value);
		}

		// Assert
		assertEquals(actual, [1, 2, 3]);
	});
});

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for
Deno.test("Symbol.for", async (context) => {
	await context.step("同一シンボルを取得できる", () => {
		// Arrange
		// Act
		const actual = Symbol.for("x") === Symbol.for("x");

		// Assert
		assert(actual);
	});
});

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor
Deno.test("Symbol.keyFor", async (context) => {
	await context.step("Symbol.forで生成したシンボルのキーを取得できる", () => {
		// Arrange
		const symbol = Symbol.for("x");

		// Act
		const actual = Symbol.keyFor(symbol);

		// Assert
		assertEquals(actual, "x");
	});

	await context.step("Symbolで生成したシンボルのキーを取得できない", () => {
		// Arrange
		// グローバルシンボルレジストリに登録されない
		const symbol = Symbol("x");

		// Act
		const actual = Symbol.keyFor(symbol);

		// Assert
		assertEquals(actual, undefined);
	});
});
