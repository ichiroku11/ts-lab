// Record<Keys,Type>
// https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype

export const nothing = null;

// Record<Keys,Type>
// あるものからあるものへのマップ（対応付け）としてオブジェクトを表現できる

type Name = "kawa" | "kei" | "waka";
type Price = number;

// メニューの名前と価格の対応付け
const prices: Record<Name, Price> = {
	"kawa": 330,
	"kei": 360,
	"waka": 320,
};
console.log(prices);
