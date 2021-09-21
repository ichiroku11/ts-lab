// keyof演算子
// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html

export const nothing = null;

// keyofはインデクサの型も取得できる
// 配列っぽい型のインデクサのキーの型を取得する
type Arrayish<TValue> = {
	[index: number]: TValue
};

// type ArrayishKey = number
type ArrayishKey = keyof Arrayish<unknown>;
const key1: ArrayishKey = 1;
console.log(key1);


// Map風の型のインデクサのキーの型を取得する
type Mapish<TValue> = {
	[key: string]: TValue
};

// type MapishKey = string | number
// JavaScriptのオブジェクトの数値のキーが文字列に変換されるため、string | number
type MapishKey = keyof Mapish<unknown>;
const key2: MapishKey = "x";
console.log(key2);
