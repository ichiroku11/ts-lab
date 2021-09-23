// Uppercase<StringType>
// Lowercase<StringType>
// Capitalize<StringType>
// Uncapitalize<StringType>
// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#intrinsic-string-manipulation-types

export const nothing = null;

// Uppercase<StringType>
// StringTypeをすべて大文字に変換する
type T1 = "hello";
// type T1Uppercase = "HELLO"
type T1Uppercase = Uppercase<T1>;

// Lowercase<StringType>
// StringTypeをすべて小文字に変換する
type T2 = "HELLO";
// type T2Lowercase = "hello"
type T2Lowercase = Lowercase<T2>;

// Capitalize<StringType>
// StringTypeの1文字目を大文字に変換する
type T3 = "hello";
// type T3Capitalize = "Hello"
type T3Capitalize = Capitalize<T3>;

// Uncapitalize<StringType>
// StringTypeの1文字目を小文字に変換する
type T4 = "HELLO";
// type T4Uncapitalize = "hELLO"
type T4Uncapitalize = Uncapitalize<T4>;

