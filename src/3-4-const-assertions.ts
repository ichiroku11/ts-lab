// const assertions
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions

// deno-lint-ignore-file prefer-const

{
	// x1: string
	// x2: "hello"
	let x1 = "hello";
	let x2 = "hello" as const;
	console.log(x1);
	console.log(x2);

	// y1: number[]
	// y2: readonly [10, 20]
	let y1 = [10, 20];
	let y2 = [10, 20] as const;
	console.log(y1);
	console.log(y2);

	// z1: { text: string }
	// z2: { readonly text: "hello" }
	let z1 = { text: "hello" };
	let z2 = { text: "hello" } as const;
	console.log(z1);
	console.log(z2);
}
