import {
	assertEquals
} from "testing/asserts.ts";

// 参考
// https://techblog.gmo-ap.jp/2024/11/19/js-generator-yield/
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Iteration_protocols

// イテラブル = 反復可能プロコトル
// for...ofで列挙できる
Deno.test("Iterable_サンプル", () => {
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

	const iterable: Iterable<number> = {
		[Symbol.iterator]: () => {
			return iterator;
		}
	};

	const actual: number[] = [];

	// Act
	for (const value of iterable) {
		actual.push(value);
	}

	// Assert
	assertEquals(actual[0], 1);
	assertEquals(actual[1], 2);
	assertEquals(actual[2], 3);
});

Deno.test("IterableIterator_サンプル", () => {
	// Arrange
	let index = 0;
	const iterator: IterableIterator<number> = {
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
		},
		[Symbol.iterator](): IterableIterator<number> {
			return this;
		}
	};

	// Act
	const actual: number[] = [];

	// Assert
	for (const value of iterator) {
		actual.push(value);
	}
});
