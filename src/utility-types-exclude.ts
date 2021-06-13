// Exclude<Type, ExcludedUnion>
// https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetype-excludedunion

export const nothing = null;

// TypeからExcludedUnionを除いた型を表す

// type Type1 = "a" | "b"
type Type1 = Exclude<"a" | "b" | "c" | "d", "b" | "c">;

const v1: Type1 = "a";
console.log(v1);

// type Type2 = number | boolean
type Type2 = Exclude<number | string | boolean, string>;

const v2: Type2 = true;
console.log(v2);

