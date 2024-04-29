import {
	assert,
	assertStrictEquals,
	assertThrows,
} from "testing/asserts.ts";

// https://developer.mozilla.org/ja/docs/Web/API/AbortSignal

// AbortSignal.abort
Deno.test("AbortSignal.abort_abortされたAbortSignalを生成する", () => {
	// Arrange
	// Act
	const signal = AbortSignal.abort("abort!");

	// Assert
	assert(signal.aborted);
	assertStrictEquals(signal.reason, "abort!");
});

// AbortSignal.throwIfAborted
Deno.test("AbortSignal.throwIfAborted_abortされたAbortSignalからは例外が発生する", () => {
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
