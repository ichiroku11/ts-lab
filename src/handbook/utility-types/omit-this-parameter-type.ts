// OmitThisParameter<Type>
// https://www.typescriptlang.org/docs/handbook/utility-types.html#omitthisparametertype
// thisパラメータを除いた関数の型を取得する

export const nothing = null;

function toHexString(this: number): string {
	return this.toString(16);
}

// const fiveToHexString: () => string
const fiveToHexString: OmitThisParameter<typeof toHexString> = toHexString.bind(5);

const value = fiveToHexString();
console.log(value);
// 5
