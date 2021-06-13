// NonNullable<Type>
// https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype

export const nothing = null;

// Typeからnullとundefinedを除いた型を表す

// type Type1 = string | number
type Type1 = NonNullable<string | number | null | undefined>;

const v1: Type1 = "a";
console.log(v1);
