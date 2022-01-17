// https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads

export const nothing = null;

// Always prefer parameters with union types instead of overloads when possible
// 可能であれば、オーバーロードではなくユニオン型のパラメータを常に好む

// オーバーロードシグネチャと実装シグネチャ
// 1つ目のf1をオーバーロードシグネチャと言い、2つ目のf1を実装シグネチャと言う
function f1(value: string): void;
function f1(): void {
}

// オーバーロードシグネチャは呼び出せる
f1("");

// 実装シグネチャは外から見えない（呼び出せない）のでコンパイルエラーになる
//f1();


// ユニオン型を使うとオーバーロードシグネチャが不要になる
/*
function f2(value: string): void;
function f2(value: number): void;
*/
function f2(value: string | number): void {
	console.log(typeof value);
}

f2("");
f2(0);
f2(Math.random() > 0.5 ? "" : 0);
