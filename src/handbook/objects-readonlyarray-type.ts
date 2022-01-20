// https://www.typescriptlang.org/docs/handbook/2/objects.html#the-readonlyarray-type

export const nothing = null;

const values = [1, 2, 3] as readonly number[];
// 多分同じこと
//const values: readonly number[] = [1, 2, 3];
//const values: ReadonlyArray<number> = [1, 2, 3];

// 読み取りは可能
console.log(values[0]);

// 追加・変更・削除できない
// Property 'pop' does not exist on type 'readonly number[]'
//console.log(values.pop());

// Property 'push' does not exist on type 'readonly number[]'
//console.log(values.push(4));
