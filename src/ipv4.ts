

export class IPv4 {
	// 許可する文字
	// ”0-9"、"."、"/"
	private static readonly _regexpAllowedChar = /[0-9\.\/]+/;

	// "."
	private static readonly _regexpFindDot = /\./g;

	// "/"
	private static readonly _regexpFindSlash = /\//g;

	// 10進数表現を2進数表現に変換する
	public static toBinary(decimalText: string): string {
		// ”0-9"、"."、"/"を許可
		if (!this._regexpAllowedChar.test(decimalText)) {
			throw new IPv4ArgumentError("Valid characters are numbers, dot and slash.");
		}

		// "."の数は0～3
		const countOfDot = decimalText.match(this._regexpFindDot)?.length ?? 0;
		if (!(countOfDot <= 3)) {
			throw new IPv4ArgumentError("There are many dots.");
		}

		// "/"の数は0または1
		const countOfSlash = decimalText.match(this._regexpFindSlash)?.length ?? 0;
		if (!(countOfSlash <= 1)) {
			throw new IPv4ArgumentError("There are many slashes.");
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


export class IPv4ArgumentError extends Error {
}

