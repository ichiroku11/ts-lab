// Keyof Type Operator
// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html

export const nothing = null;

// keyof演算子
// オブジェクトのキーの型を取得できる
// type VectorKey = "x" | "y"
type VectorKey = keyof {
	x: number;
	y: number;
};
const key1: VectorKey = "x";
console.log(key1)


// keyofはインデクサの型も取得できる
// 配列っぽい型のインデクサのキーの型を取得する
type Arrayish<TValue> = {
	[index: number]: TValue
};

// type ArrayishKey = number
type ArrayishKey = keyof Arrayish<unknown>;
const key2: ArrayishKey = 1;
console.log(key2);


// Map風の型のインデクサのキーの型を取得する
type Mapish<TValue> = {
	[key: string]: TValue
};

// type MapishKey = string | number
// JavaScriptのオブジェクトの数値のキーが文字列に変換されるため、string | number
type MapishKey = keyof Mapish<unknown>;
const key3: MapishKey = "x";
console.log(key3);
