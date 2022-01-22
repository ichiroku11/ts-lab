// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing

export const nothing = null;

// ユニオン型に対してin演算子でプロパティを持つ型に絞り込める

type Bird = {
	fly: () => void;
};

type Cat = {
	run: () => void;
};

type Animal = Bird | Cat;

function move(animal: Animal): void {
	if ("fly" in animal) {
		// flyメソッドを持つBird型に絞り込める
		animal.fly();
	} else {
		animal.run();
	}
}

// flied
move({
	fly: () => {
		console.log("flied");
	},
});

// run
move({
	run: () => {
		console.log("run");
	},
});
