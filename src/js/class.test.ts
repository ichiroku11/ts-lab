import {
	assert
} from "testing/asserts.ts";

// classのメソッドは同じ関数オブジェクト
class Sample {
	#value: number;
	constructor(value: number) {
		this.#value = value;
	}

	public value(): number {
		return this.#value;
	}
}

Deno.test("method_クラスのメソッドは同じ関数オブジェクト", () => {
	// Arrange
	const sample1 = new Sample(1);
	const sample2 = new Sample(2);

	// Act
	// Assert
	assert(sample1.value === sample2.value);
});
