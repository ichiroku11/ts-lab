// https://www.typescriptlang.org/docs/handbook/2/functions.html#declaring-this-in-a-function
// http://typescript.ninja/typescript-in-definitelyland/types-advanced.html#specifying-this-types-for-functions

// 関数内部のthisの型を指定できる
function test(this: string): string {
	return this.toUpperCase();
}

const value = test.bind("abc")();
// ABC
console.log(value);

// エラー
//test.bind(1)();
