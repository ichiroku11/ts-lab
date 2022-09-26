export class IPv4 {
	private static _regexp = /[0-9\.\/]+/;

	// 10進数表現を2進数表現に変換する
	public static toBinary(decimal: string): string {
		if (!this._regexp.test(decimal)) {
			// todo:
			throw new Error("regexp");
		}

		// todo:
		// "/"で分割
		// 分割した結果が3つ以上ならエラー
		// 2つならサブネットマスクあり
		// 1つならサブネットマスクなし
		// "."で分割
		// 分割した結果が5つ以上はエラー
		// 4つ以下なら空は0とする

		return decimal;
	}
}
