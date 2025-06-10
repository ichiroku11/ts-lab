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
	await context.step("指定された数だけ値を読み飛ばす", () => {
		// Arrange
		// Act
		const actual = [1, 2, 3].values()
			.drop(2)
			.toArray();

		// Assert
		assertEquals(actual, [3]);
	});

	await context.step("要素数を超えて読み飛ばしても例外は発生しない", () => {
		// Arrange
		// Act
		const actual = [1, 2, 3].values()
			.drop(10)
			.toArray();

		// Assert
		assertEquals(actual, []);
	});

	await context.step("引数に0を指定できる", () => {
		// Arrange
		// Act
		const actual = [1, 2, 3].values()
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
				[1, 2, 3].values().drop(-1);
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

Deno.test("Iterator.find", async (context) => {
	function* generator() {
		yield 1;
		yield 2;
		// ここまで到達しない（このメッセージは表示されない）
		console.log("条件を満たす要素が見つかった以降は列挙されない");
		yield 3;
	}

	await context.step("条件を満たす最初の要素を返す", () => {
		// Arrange
		// Act
		const actual = generator()
			.find(value => value == 2);

		// Assert
		assertEquals(actual, 2);
	});

	await context.step("条件を満たす要素が見つからない場合はundefinedを返す", () => {
		// Arrange
		// Act
		const actual = [].values()
			.find(value => value == 1);

		// Assert
		assertEquals(actual, undefined);
	});

});

Deno.test("Iterator.forEach", async (context) => {
	await context.step("それぞれ要素に対して1回ずつコールバック関数が呼び出される", () => {
		// Arrange
		const actual:[string, number][] = [];

		// Act
		["a", "b", "c"]
			.values()
			.forEach((value, index) => {
				actual.push([value, index]);
			});

		// Assert
		// インデックスは0から始まる
		assertEquals(actual, [["a", 0], ["b", 1], ["c", 2]]);
	});
});

Deno.test("Iterator.flatMap", async (context) => {
	await context.step("配列の配列を平坦化するサンプル", () => {
		// Arrange
		const values = [[1, 2, 3], [4, 5]].values();
	
		// Act
		const actual = values
			.flatMap(value => value)
			.toArray();

		// Assert
		assertEquals(actual, [1, 2, 3, 4, 5]);
	});
});

Deno.test("Iterator.reduce", async (context) => {
	await context.step("要素を集計するサンプル", () => {
		// Arrange
		const values = [1, 2, 3].values();
	
		// Act
		const actual = values
			.reduce((previous, current) => previous + current);

		// Assert
		assertEquals(actual, 6);
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

Deno.test("Iterator.take", async (context) => {
	await context.step("指定された数だけ値を読み出す", () => {
		// Arrange
		// Act
		const actual = [1, 2, 3].values()
			.take(2)
			.toArray();

		// Assert
		assertEquals(actual, [1, 2]);
	});

	await context.step("要素数を超えて読み出しても例外は発生しない", () => {
		// Arrange
		// Act
		const actual = [1, 2, 3].values()
			.take(10)
			.toArray();

		// Assert
		assertEquals(actual, [1, 2, 3]);
	});

	await context.step("引数に0を指定できる", () => {
		// Arrange
		// Act
		const actual = [1, 2, 3].values()
			.take(0)
			.toArray();

		// Assert
		assertEquals(actual, []);
	});

	await context.step("引数にマイナスを指定すると例外が発生する", () => {
		// Arrange
		// Act
		// Assert
		const error = assertThrows(
			() => {
				[1, 2, 3].values().take(-1);
			},
			RangeError);

		console.log(error.message);
		// -1 must be positive
	});
});

Deno.test("Iterator.toArray", async (context) => {
	await context.step("取り出される要素で新しい配列インスタンスを生成する", () => {
		// Arrange
		// Act
		const actual = [1, 2, 3].values()
			.toArray();

		// Assert
		assertEquals(actual, [1, 2, 3]);
	});
});
