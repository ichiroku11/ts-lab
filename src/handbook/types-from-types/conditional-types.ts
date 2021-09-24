// Conditional Types
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

export const nothing = null;


// SomeType extends OtherType ? TrueType : FalseType;


interface IdLabel {
	id: number;
}

interface NameLabel {
	name: string;
}

// 型引数がnumberの場合はIdLabel、stringの場合はNameLabel
type IdOrNameLabel<TValue extends number | string>
	= TValue extends number
		? IdLabel
		: NameLabel;

// 関数のオーバーロードが不要になる
function createLabel<TValue extends number | string>(value: TValue): IdOrNameLabel<TValue> {
	console.log(typeof value);
	// todo: 実装方法がわからない
	throw "Unimplemented";
}

// _id: IdLabel
const _id = createLabel(1);

// _name: NameLabel
const _name = createLabel("x");
