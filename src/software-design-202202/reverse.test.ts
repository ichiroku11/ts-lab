// 命令型プログラミングと関数型プログラミングそれぞれで、配列を逆順にする関数を書いてみる

import {
	assertEquals
} from "https://deno.land/std@0.131.0/testing/asserts.ts";


// 配列を逆順にする関数
type ReverseFunc = (values: number[]) => number[];

// 命令型
const reverse1: ReverseFunc = values => {
	const result: number[] = [];
	values.forEach(value => {
		result.unshift(value);
	});
	return result;
}

// 関数型
const reverse2: ReverseFunc = ([value, ...rest]) => value === undefined ? [] : [...reverse2(rest), value];

// 関数型（reduce関数を使う）
const reverse3: ReverseFunc = values => values.reduce((previous, current) => [current, ...previous], [] as number[]);

Deno.test("reverse関数が正しいことを確認する", () => {
	assertEquals(reverse1([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
	assertEquals(reverse2([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
	assertEquals(reverse3([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
});
