import {
	assertEquals
} from "testing/asserts.ts";

// 命令型プログラミングと関数型プログラミングそれぞれでmap関数を書いてみる
// map関数
type MapFunc = (func: (value: number) => number, values: number[]) => number[];

// 命令型
const map1: MapFunc = (func, values) => {
	const result: number[] = [];
	values.forEach(value => {
		result.push(func(value));
	});
	return result;
};

// 関数型
const map2: MapFunc = (func, [value, ...rest]) => value === undefined
	? []
	: [func(value), ...map2(func, rest)];

// 関数型（reduce関数を使う）
const map3: MapFunc = (func, values) => values.reduce((previous, current) => [...previous, func(current)], [] as number[]);

Deno.test("map関数が正しいことを確認する", () => {
	assertEquals(map1(value => value ** 2, [1, 2, 3]), [1, 4, 9]);
	assertEquals(map2(value => value ** 2, [1, 2, 3]), [1, 4, 9]);
	assertEquals(map3(value => value ** 2, [1, 2, 3]), [1, 4, 9]);
});
