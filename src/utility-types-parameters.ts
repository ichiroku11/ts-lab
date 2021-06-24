// Parameters<Type>
// https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype

export const nothing = null;

// Parameters<Type>
// Typeで指定した関数の型のパラメータをタプルで表す

// type Type1 = []
type Type1 = Parameters<() => void>;

// type Type2 = [p1: string, p2: number]
type Type2 = Parameters<(p1: string, p2: number) => any>;

// type Type3 = [arg: {
//	a: number;
//	b: string;
// }]
function f1(arg: { a: number, b: string }): void {
	console.log(arg.a);
	console.log(arg.b);
}
type Type3 = Parameters<typeof f1>;
