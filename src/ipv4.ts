
// 0～255
type IPv4AddressPart = number;
type IPv4MaskPrefix = number;

export class IPv4 {
	// 許可する文字
	// ”0-9"、"."、"/"
	private static readonly _regexpAllowedChar = /[0-9\.\/]+/;

	// "."
	private static readonly _regexpFindDot = /\./g;

	// "/"
	private static readonly _regexpFindSlash = /\//g;

	private readonly _address: [IPv4AddressPart, IPv4AddressPart, IPv4AddressPart, IPv4AddressPart];

	// todo:
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

		// todo:
		const [address0, address1, address2, address3] = this.parseAddress(address);
		if (mask === undefined) {
			return new IPv4(address0, address1, address2, address3);
		}

		return new IPv4(0, 0, 0, 0);
	}

	// サブネットマスクのプレフィックスからIPv4を生成する
	public static fromMaskPrefix(prefix: IPv4MaskPrefix): IPv4 {
		// todo:
		if (prefix < 0 || prefix > 32) {
			throw new Error("");
		}

		// サブネットマスクの2進数文字列を生成してから、
		// 8文字ずつ取り出し、2進数として数値を変換する
		const binary = "1".repeat(prefix).padEnd(32, "0");

		return new IPv4(
			parseInt(binary.slice(0, 8), 2),
			parseInt(binary.slice(8, 16), 2),
			parseInt(binary.slice(16, 24), 2),
			parseInt(binary.slice(24, 32), 2));
	}

	constructor(address0: IPv4AddressPart, address1: IPv4AddressPart, address2: IPv4AddressPart, address3: IPv4AddressPart) {
		// todo: 引数チェック
		this._address = [address0, address1, address2, address3];
	}

	public toBinaryString(): string {
		return this._address.map(part => part.toString(2).padStart(8, "0")).join(".");
	}

	public toDecimalString(): string {
		return this._address.join(".");
	}
}

export class IPv4ArgumentError extends Error {
}

