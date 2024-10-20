import {
	assertEquals,
	assert,
	assertFalse
} from "testing/asserts.ts";

// Generator
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator
// functions*
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/function*
Deno.test("next", async (context) => {
	// 2つ連番を生成するGenerator
	function* generator(value: number) {
		yield value;
		yield value + 1;
	}

	await context.step("nextメソッドで返ってくるオブジェクトのプロパティを確認する", () => {
		// Arrange
		const gen = generator(1);

		// Act
		const actual1 = gen.next();
		const actual2 = gen.next();
		const actual3 = gen.next();

		// Assert
		// 1つ目
		assertFalse(actual1.done);
		assertEquals(1, actual1.value);

		// 2つ目
		assertFalse(actual2.done);
		assertEquals(2, actual2.value);

		// 3つ目
		// 次の値を生成できないのでdoneはfalseになる
		assert(actual3.done);
		assertEquals(undefined, actual3.value);
	});
});