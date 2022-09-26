export class IPv4 {
	private static _regexp = /[0-9\.\/]+/;

	// 10進数表現を2進数表現に変換する
	public static toBinary(decimal: string): string {
		if (!this._regexp.test(decimal)) {
			// todo:
			throw new Error("regexp");
		}

		return decimal;
	}
}
