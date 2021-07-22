// Uppercase<StringType>
// Lowercase<StringType>
// Capitalize<StringType>
// Uncapitalize<StringType>
// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#intrinsic-string-manipulation-types


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
// todo:


// Uncapitalize<StringType>
// todo:
