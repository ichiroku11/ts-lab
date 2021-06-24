// ConstructorParameters<Type>
// https://www.typescriptlang.org/docs/handbook/utility-types.html#constructorparameterstype

export const nothing = null;

// Parameters<Type>
// Typeで指定した関数の型のパラメータをタプルで表す

// type Type1 = [message?: string | undefined ]
type Type1 = ConstructorParameters<ErrorConstructor>;
