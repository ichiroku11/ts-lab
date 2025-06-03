import {
	assert,
	assertEquals,
	assertThrows,
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

Deno.test("Iterator.drop", async (context) => {
	function* generator() {
		yield 1;
		yield 2;
		yield 3;
	}

	await context.step("指定された数だけ値を読み飛ばす", () => {
		// Arrange
		// Act
		const actual = generator()
			.drop(2)
			.toArray();

		// Assert
		assertEquals(actual, [3]);
	});

	await context.step("要素数を超えて読み飛ばしても例外は発生しない", () => {
		// Arrange
		// Act
		const actual = generator()
			.drop(10)
			.toArray();

		// Assert
		assertEquals(actual, []);
	});

	await context.step("引数に0を指定できる", () => {
		// Arrange
		// Act
		const actual = generator()
			.drop(0)
			.toArray();

		// Assert
		assertEquals(actual, [1, 2, 3]);
	});

	await context.step("引数にマイナスを指定すると例外が発生する", () => {
		// Arrange
		// Act
		// Assert
		const error = assertThrows(
			() => {
				generator().drop(-1);
			},
			RangeError);

		console.log(error.message);
		// -1 must be positive
	});
});

Deno.test("Iterator.every", async (context) => {
	function* generator() {
		yield 1;
		yield 2;
		yield 3;
		console.log("すべての要素が列挙される");
	}

	await context.step("指定した関数において、すべての要素がtrueを返すとtrueを返す", () => {
		// Arrange
		// Act
		const actual = generator()
			.every(value => value > 0);

		// Assert
		assert(actual);
	});
});

Deno.test("Iterator.some", async (context) => {
	function* generator() {
		yield 1;
		yield 2;
		// ここまで到達しない（このメッセージは表示されない）
		console.log("条件を満たす要素が見つかった以降は列挙されない");
		yield 3;
	}

	await context.step("指定した関数において、いずれかの要素がtrueを返すとtrueを返す", () => {
		// Arrange
		// Act
		const actual = generator()
			.some(value => value == 2);

		// Assert
		assert(actual);
	});
});

Deno.test("Iterator.forEach", async (context) => {
	function* generator() {
		yield "a";
		yield "b";
		yield "c";
	}

	await context.step("それぞれ要素に対して1回ずつコールバック関数が呼び出される", () => {
		// Arrange
		const actual:[string, number][] = [];

		// Act
		generator()
			.forEach((value, index) => {
				actual.push([value, index]);
			});

		// Assert
		// インデックスは0から始まる
		assertEquals(actual, [["a", 0], ["b", 1], ["c", 2]]);
	});
});

Deno.test("Iterator.take", async (context) => {
	function* generator() {
		yield 1;
		yield 2;
		yield 3;
	}

	await context.step("指定された数だけ値を読み出す", () => {
		// Arrange
		// Act
		const actual = generator()
			.take(2)
			.toArray();

		// Assert
		assertEquals(actual, [1, 2]);
	});

	await context.step("要素数を超えて読み出しても例外は発生しない", () => {
		// Arrange
		// Act
		const actual = generator()
			.take(10)
			.toArray();

		// Assert
		assertEquals(actual, [1, 2, 3]);
	});
});

Deno.test("Iterator.toArray", async (context) => {
	function* generator() {
		yield 1;
		yield 2;
		yield 3;
	}

	await context.step("取り出される要素で新しい配列インスタンスを生成する", () => {
		// Arrange
		// Act
		const actual = generator()
			.toArray();

		// Assert
		assertEquals(actual, [1, 2, 3]);
	});
});
