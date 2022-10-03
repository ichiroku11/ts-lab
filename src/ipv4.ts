
// 0～255
type IPv4AddressPart = number;

export class IPv4 {
	// 許可する文字
	// ”0-9"、"."、"/"
	private static readonly _regexpAllowedChar = /[0-9\.\/]+/;

	// "."
	private static readonly _regexpFindDot = /\./g;

	// "/"
	private static readonly _regexpFindSlash = /\//g;

	private readonly _address: [IPv4AddressPart, IPv4AddressPart, IPv4AddressPart, IPv4AddressPart];

	constructor(address0: IPv4AddressPart, address1: IPv4AddressPart, address2: IPv4AddressPart, address3: IPv4AddressPart) {
		// todo: 引数チェック
		this._address = [address0, address1, address2, address3];
	}

	public toDecimalString(): string {
		return this._address.join(".");
	}

	public toBinaryString(): string {
		return this._address.map(part => part.toString(2).padStart(8, "0")).join(".");
	}


	private static parseAddress(decimal: string): [number, number, number, number] {
		return [0, 0, 0, 0];
	}

	// 10進数表現のIPアドレス文字列からIPv4を生成する
	public static fromDecimalString(decimal: string): IPv4 {
		// ”0-9"、"."、"/"を許可
		if (!this._regexpAllowedChar.test(decimal)) {
			throw new IPv4ArgumentError("Valid characters are numbers, dot and slash.");
		}

		// "."の数は0～3
		const countOfDot = decimal.match(this._regexpFindDot)?.length ?? 0;
		if (!(countOfDot <= 3)) {
			throw new IPv4ArgumentError("There are many dots.");
		}

		// "/"の数は0または1
		const countOfSlash = decimal.match(this._regexpFindSlash)?.length ?? 0;
		if (!(countOfSlash <= 1)) {
			throw new IPv4ArgumentError("There are many slashes.");
		}

		const [address, mask] = decimal.split("/");

		const [address0, address1, address2, address3] = this.parseAddress(address);
		if (countOfSlash === 0) {
			return new IPv4(address0, address1, address2, address3);
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

		return new IPv4(0, 0, 0, 0);
	}
}

export class IPv4ArgumentError extends Error {
}

