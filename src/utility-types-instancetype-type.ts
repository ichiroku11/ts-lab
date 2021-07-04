// InstanceType<Type>
// https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype

export const nothing = null;

// InstanceType<Type>
// Typeで指定したコンストラクタ関数のインスタンスの型を表す

class Sample {
}

// type Type1 = Sample
type Type1 = InstanceType<typeof Sample>;
