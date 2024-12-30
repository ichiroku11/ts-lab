import {
	assertEquals,
	assert,
	assertFalse
} from "testing/asserts.ts";

// Generator
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator
// functions*
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/function*
Deno.test("Generator.next", async (context) => {
	// 2つ連番を生成するGenerator
	function* generator(value: number) {
		yield value;
		yield value + 1;
	}

	await context.step("nextメソッドで返ってくるオブジェクトのプロパティを確認する", () => {
		// Arrange
		const gen = generator(1);

		// Act
		const actual = [
			gen.next(),
			gen.next(),
			gen.next(),
		];
		// Assert
		// 1つ目
		assertFalse(actual[0].done);
		assertEquals(actual[0].value, 1);

		// 2つ目
		assertFalse(actual[1].done);
		assertEquals(actual[1].value, 2);

		// 3つ目
		// 次の値を生成できないのでdoneはfalseになる
		assert(actual[2].done);
		assertEquals(actual[2].value, undefined);
	});
});
