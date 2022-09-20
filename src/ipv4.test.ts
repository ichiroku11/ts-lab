
import { IPv4 } from "./ipv4.ts"
import {
	assertEquals,
} from "testing/asserts.ts";


Deno.test("toBinary_10進数表現を2進数表現に変換できる", () => {
	const actual = IPv4.toBinary("");
	const expected = "";
	assertEquals(actual, expected);
});
