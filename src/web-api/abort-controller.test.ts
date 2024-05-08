import {
	assert,
	assertFalse
} from "testing/asserts.ts";

// https://developer.mozilla.org/ja/docs/Web/API/AbortController

Deno.test("AbortController.abort_AbortSignalが中止されることを確認する", () => {
	// Arrange
	const controller = new AbortController();
	const signal = controller.signal;

	// Act
	const before = signal.aborted;

	controller.abort("error!")

	const after = signal.aborted;

	// Assert
	assertFalse(before);
	assert(after);
});
