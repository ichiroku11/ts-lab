import {
	assertEquals
} from "testing/asserts.ts";

// 参考
// https://techblog.gmo-ap.jp/2024/11/19/js-generator-yield/
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator

// イテレーターは、イテレータープロトコルに適合するオブジェクト
// 最小限nextメソッドを持つ
// nextメソッドは、IteratorResultオブジェクトを返す
Deno.test("Iterator_値を生成するサンプル", () => {
	// Arrange
	let index = 0;
	const iterator: Iterator<number> = {
		next(): IteratorResult<number> {
			index++;

			if (index > 3) {
				return {
					done: true,
					value: undefined
				};
			}

			return {
				done: false,
				value: index
			};
		}
	};

	// Act
	const actual = [
		iterator.next(),
		iterator.next(),
		iterator.next(),
		iterator.next(),
	];

	// Assert
	assertEquals(actual[0], { done: false, value: 1 });
	assertEquals(actual[1], { done: false, value: 2 });
	assertEquals(actual[2], { done: false, value: 3 });
	assertEquals(actual[3], { done: true, value: undefined });
});

Deno.test("Iterator_値を取り出すサンプル", () => {
	// Arrange
	const array = [1, 2, 3];
	// ArrayIterator
	const iterator = array[Symbol.iterator]();

	// Act
	const actual = [
		iterator.next(),
		iterator.next(),
		iterator.next(),
		iterator.next(),
	];

	// Assert
	assertEquals(actual[0], { done: false, value: 1 });
	assertEquals(actual[1], { done: false, value: 2 });
	assertEquals(actual[2], { done: false, value: 3 });
	assertEquals(actual[3], { done: true, value: undefined });
});
