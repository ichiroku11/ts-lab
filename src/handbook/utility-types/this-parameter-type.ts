// ThisParameterType<Type>
// https://www.typescriptlang.org/docs/handbook/utility-types.html#thisparametertypetype
// 関数のthisパラメータの型を取得する

export const nothing = null;

function toHexString(this: number): string {
	return this.toString(16);
}

// valueの型はnumber
function numberToHexString(value: ThisParameterType<typeof toHexString>): string {
	return toHexString.apply(value);
}

const value = numberToHexString(10);
console.log(value);
// a
