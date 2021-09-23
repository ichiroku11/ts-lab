// Required<Type>
// https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype

export const nothing = null;

// Required<Type>でTypeのプロパティが必須になる

interface Sample {
	value?: number;
}

const s1: Sample = {};
console.log(s1);

const s2: Required<Sample> = { value: 0 };
console.log(s2);
