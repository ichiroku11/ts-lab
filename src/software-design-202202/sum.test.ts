import {
	assertEquals
} from "https://deno.land/std@0.131.0/testing/asserts.ts";

// 命令型プログラミングと関数型プログラミングそれぞれで、配列の和を求める関数を書いてみる
// 配列の和を求める関数
type SumFunc = (values: number[]) => number;

// 命令型（手続き型）
const sum1: SumFunc = values => {
	let result = 0;
	values.forEach(value => {
		result += value;
	});
	return result;
};

// 関数型
const sum2: SumFunc = ([value, ...rest]) => value === undefined ? 0 : value + sum2(rest);

// 関数型（reduce関数を使う）
const sum3: SumFunc = values => values.reduce((previous, current) => previous + current);

Deno.test("sum関数が正しいことを確認する", () => {
	assertEquals(sum1([1, 2, 3, 4, 5]), 15);
	assertEquals(sum2([1, 2, 3, 4, 5]), 15);
	assertEquals(sum3([1, 2, 3, 4, 5]), 15);
});
