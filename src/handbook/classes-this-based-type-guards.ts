// https://www.typescriptlang.org/docs/handbook/2/classes.html#this-based-type-guards

export const nothing = null;

// クラスやインターフェイスのメソッドにおけるユーザー定義の型ガード
// メソッドの戻り値をthis is Typeとして型を絞り込むメソッドを定義できる

// 関数におけるユーザー定義の型ガードは以下を参照
// narrowing-type-predicates.ts

class Animal {
	public isBird(): this is Bird {
		return this instanceof Bird;
	}

	public isCat(): this is Cat {
		return this instanceof Cat;
	}
}

class Bird extends Animal {
	public fly(): void {
		console.log("Bird flies");
	}
}

class Cat extends Animal {
	public run(): void {
		console.log("Cat runs");
	}
}

function getAnimal(): Animal {
	// とりあえずCatを返す
	return new Cat();
}

const animal = getAnimal();
if (animal.isBird()) {
	animal.fly();
} else if (animal.isCat()) {
	animal.run();
}
