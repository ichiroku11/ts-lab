import {
	assertEquals
} from "testing/asserts.ts";

// 判別可能なユニオン型
// タグ付きユニオン（tagged union）や直和型と呼ぶこともある
// https://typescriptbook.jp/reference/values-types-variables/discriminated-union

type Success<TValue> = {
	type: "success";
	value: TValue;
};

type Failure = {
	type: "failure";
	error: Error;
};

type Result<TValue> = Success<TValue> | Failure;

function getMessage<TValue>(result: Result<TValue>): string {
	// しるしで型を絞り込む
	if (result.type === "success") {
		return "成功";
	}
	return "失敗";
}

Deno.test("discriminated-union_動きを確認する", () => {
	// Arrange
	const result: Result<number> = {
		type: "success",
		value: 1,
	};

	// Act
	const actual = getMessage(result);

	// Assert
	assertEquals(actual, "成功");
});