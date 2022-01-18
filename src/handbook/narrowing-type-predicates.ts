// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

export const nothing = null;

// 関数におけるユーザー定義の型ガード（user-defined type guard）
// 型述語（type predicate）を使って関数を定義できる
// 型述語は関数の戻り値にparameterName is Typeと書く

// クラスやインターフェイスのメソッドにおけるユーザー定義の型ガードは以下を参照
// classes-this-based-type-guards.ts

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
