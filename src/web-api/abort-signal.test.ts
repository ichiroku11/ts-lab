import {
	assert,
	assertStrictEquals,
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
