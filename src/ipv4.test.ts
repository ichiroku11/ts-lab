
import { IPv4 } from "./ipv4.ts"
import {
	assertEquals,
} from "testing/asserts.ts";


Deno.test("toBinary_10進数表現を2進数表現に変換できる", async (context) => {
	const testData = [
		// [srouce, expected]
		["", ""]
	];
	for (const [source, expected] of testData) {
		await context.step(`${source} => ${expected}`, () => {
			// Arrange
			// Act
			const actual = IPv4.toBinary(source);
			// Assert
			assertEquals(actual, expected);
		});
	}
});
