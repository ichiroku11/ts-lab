import {
	assertEquals
} from "testing/asserts.ts";

// 命令型プログラミングと関数型プログラミングそれぞれで配列ないの最大値を返す関数を書いてみる
// 配列内の最大値を返す
type MaxFunc = (values: number[]) => number;

// 命令型
const max1: MaxFunc = values => {
	let result = Number.MIN_VALUE;
	values.forEach(value => {
		if (value > result) {
			result = value;
		}
	});
	return result;
};

// 関数型
// max2関数を2回呼ぶような？
const max2: MaxFunc = ([value, ...rest]) => rest.length === 0
	? value
	: value > max2(rest)
		? value
		: max2(rest);

// 関数型（reduce関数を使う）
const max3: MaxFunc = values => values.reduce((previous, current) => previous > current ? previous : current);

Deno.test("max関数が正しいことを確認する", () => {
	assertEquals(max1([1, 2, 5, 4, 3]), 5);
	assertEquals(max2([1, 2, 5, 4, 3]), 5);
	assertEquals(max3([1, 2, 5, 4, 3]), 5);
});
