// Extract<Type, Union>
// https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union

export const nothing = null;

// TypeからExcludedUnionを除いた型を表す

// type Type1 = "b" | "c"
type Type1 = Extract<"a" | "b" | "c" | "d", "b" | "c">;

const v1: Type1 = "b";
console.log(v1);

// type Type2 = string
type Type2 = Extract<number | string | boolean, string>;

const v2: Type2 = "abc";
console.log(v2);

// サンプルにあるこの式の"Function"がエラーに
//type Type3 = Extract<string | number | (() => void), Function>;
