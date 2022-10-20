
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

	private static isAddressPart(value: number): boolean {
		return value >= 0 && value <= 255;
	}

	private static isMaskPrefix(value: number): boolean {
		return value >= 0 && value <= 32;
	}

	private static parseAddress(value: string): IPv4 {
		const parse = (value: string): IPv4AddressPart => {
			// 0～255に変換できなければ0とする
			const result = parseInt(value, 10);
			return this.isAddressPart(result)
				? result
				: 0;
		};
		const [address0, address1, address2, address3] = value.split(".");

		return new IPv4(
			parse(address0),
			parse(address1),
			parse(address2),
			parse(address3));
	}

	private static parseMaskPrefix(value: string): IPv4 {
		const parse = (value: string): IPv4MaskPrefix => {
			// 0～32に変換できなければ0とする
			const result = parseInt(value, 10);
			return this.isMaskPrefix(result)
				? result
				: 0;
		}
		const mask = parse(value);

		return IPv4.fromMaskPrefix(mask);
	}

	// 10進数表現のIPアドレス文字列からIPv4を生成する
	public static parseDecimalString(decimal: string): IPv4 {
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

		const result = IPv4.parseAddress(address);
		if (mask === undefined) {
			return result;
		}

		// サブネットマッスクを考慮する
		return result.and(IPv4.parseMaskPrefix(mask));
	}

	// サブネットマスクのプレフィックスからIPv4を生成する
	public static fromMaskPrefix(prefix: IPv4MaskPrefix): IPv4 {
		if (!IPv4.isMaskPrefix(prefix)) {
			throw new IPv4ArgumentError("Argument prefix is out of range.");
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

	private readonly _address: [IPv4AddressPart, IPv4AddressPart, IPv4AddressPart, IPv4AddressPart];

	constructor(address0: IPv4AddressPart, address1: IPv4AddressPart, address2: IPv4AddressPart, address3: IPv4AddressPart) {
		if (!IPv4.isAddressPart(address0)) {
			throw new IPv4ArgumentError("Argument address0 is out of range.");
		}
		if (!IPv4.isAddressPart(address1)) {
			throw new IPv4ArgumentError("Argument address1 is out of range.");
		}
		if (!IPv4.isAddressPart(address2)) {
			throw new IPv4ArgumentError("Argument address2 is out of range.");
		}
		if (!IPv4.isAddressPart(address3)) {
			throw new IPv4ArgumentError("Argument address3 is out of range.");
		}

		this._address = [address0, address1, address2, address3];
	}

	public and(other: IPv4): IPv4 {
		return new IPv4(
			this._address[0] & other._address[0],
			this._address[1] & other._address[1],
			this._address[2] & other._address[2],
			this._address[3] & other._address[3]);
	}

	public equals(other: IPv4): boolean {
		return this._address[0] === other._address[0] &&
			this._address[1] === other._address[1] &&
			this._address[2] === other._address[2] &&
			this._address[3] === other._address[3];
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

