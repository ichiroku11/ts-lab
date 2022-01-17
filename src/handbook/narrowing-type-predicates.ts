// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

export const nothing = null;

// 型述語（type predicate）を使ってユーザー定義の型ガード（user-defined type guard）

class Bird {
	public fly(): void {
		console.log("Bird flies");
	}
}

class Cat {
	public run(): void {
		console.log("Cat runs");
	}
}

type Animal = Bird | Cat;

// 型述語は、関数の戻り値にparameterName is Typeと書く
// この関数がtrueを返した場合、パラメータanimalの型はBirdになる
function isBird(animal: Animal): animal is Bird {
	return animal instanceof Bird;
}

function isCat(animal: Animal): animal is Cat {
	return animal instanceof Cat;
}

function getAnimal(): Animal {
	// とりあえずCatを返す
	return new Cat();
}

const animal = getAnimal();
if (isBird(animal)) {
	animal.fly();
} else if (isCat(animal)) {
	animal.run();
}
