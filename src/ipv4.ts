export class IPv4 {
	// 許可する文字
	// ”0-9"、"."、"/"
	private static _regexpAllowedChar = /[0-9\.\/]+/;
	private static _regexpFindDot = /\./g
	private static _regexpFindSlash = /\//g

	// 10進数表現を2進数表現に変換する
	public static toBinary(decimalText: string): string {
		// ”0-9"、"."、"/"を許可
		if (!this._regexpAllowedChar.test(decimalText)) {
			// todo:
			throw new Error("regexp");
		}

		// "."の数は0～3
		const countOfDot = decimalText.match(this._regexpFindDot)?.length ?? 0;
		if (!(countOfDot <= 3)) {
			// todo:
			throw new Error("regexp");
		}

		// "/"の数は0または1
		const countOfSlash = decimalText.match(this._regexpFindSlash)?.length ?? 0;
		if (!(countOfSlash <= 1)) {
			// todo:
			throw new Error("regexp");
		}

		// todo:
		/*
		// "/"で分割
		// 分割した結果が3つ以上ならエラー
		//const [addressText, maskText, ...rest] = decimalText.split("/");
		const [addressText, maskText, ...rest] = decimalText.split("/");
		if (rest.length > 0) {
			throw new Error("");
		}
		*/

		// 2つならサブネットマスクあり
		// 1つならサブネットマスクなし
		// "."で分割
		// 分割した結果が5つ以上はエラー
		// 4つ以下なら空は0とする

		return decimalText;
	}
}
