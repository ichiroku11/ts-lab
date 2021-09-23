// Generics
// https://www.typescriptlang.org/docs/handbook/2/generics.html

export const nothing = null;

// extendsで制約を指定できる
// func1はstringがnumberを引数に指定できる
function func1<TValue extends string | number>(value: TValue): void {
	console.log(typeof value);
}

func1("x");
// string

func1(1);
// number
