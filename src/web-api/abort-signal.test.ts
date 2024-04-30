import {
	assert,
	assertInstanceOf,
	assertStrictEquals,
	assertThrows,
} from "testing/asserts.ts";

// https://developer.mozilla.org/ja/docs/Web/API/AbortSignal

// AbortSignal.abort
Deno.test("AbortSignal.abort_引数なしでabortされたAbortSignalを生成する", () => {
	// Arrange
	// Act
	const signal = AbortSignal.abort();

	// Assert
	assert(signal.aborted);
	assertInstanceOf(signal.reason, DOMException);

	console.log(signal.reason.message);
});

Deno.test("AbortSignal.abort_引数に文字列を指定してabortされたAbortSignalを生成する", () => {
	// Arrange
	// Act
	const signal = AbortSignal.abort("abort!");

	// Assert
	assert(signal.aborted);
	assertStrictEquals(signal.reason, "abort!");
});

// AbortSignal.throwIfAborted
Deno.test("AbortSignal.throwIfAborted_引数に文字列を指定してabortされたAbortSignalからは例外が発生する", () => {
	// Arrange
	const signal = AbortSignal.abort("abort!");

	// Act
	// Assert
	const error = assertThrows(
		() => signal.throwIfAborted(),
		"abort!");

	// Errorインスタンスではなくstring
	// abortに渡した型か？
	assertStrictEquals(typeof error, "string");
	assertStrictEquals(error, "abort!");
});

Deno.test("AbortSignal.throwIfAborted_引数にErrorを指定してabortされたAbortSignalからは例外が発生する", () => {
	// Arrange
	const signal = AbortSignal.abort(new Error("abort!"));

	// Act
	// Assert
	assertThrows(
		() => signal.throwIfAborted(),
		Error,
		"abort!");
});
