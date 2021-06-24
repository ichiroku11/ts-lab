// ConstructorParameters<Type>
// https://www.typescriptlang.org/docs/handbook/utility-types.html#constructorparameterstype

export const nothing = null;

// ConstructorParameters<Type>
// Typeで指定したコンストラクタの型のパラメータをタプルで表す

// type Type1 = [message?: string | undefined ]
type Type1 = ConstructorParameters<ErrorConstructor>;
