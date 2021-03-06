// ReturnType<Type>
// https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype

export const nothing = null;

// ReturnType<Type>
// Typeで指定した関数の型の戻り値をタプルで表す

// type Type1 = void
type Type1 = ReturnType<() => void>;

// type Type2 = string
type Type2 = ReturnType<() => string>;

// type Type3 = {
//	a: number;
//	b: string;
// }
function f1(): { a: number, b: string } {
	return {
		a: 0,
		b: ""
	};
}
type Type3 = ReturnType<typeof f1>;
