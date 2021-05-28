// Partial<Type>
// https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype

export const nothing = null;

// Partial<Type>でTypeのプロパティがoptionalになる

interface Todo {
	title: string;
	description: string;
}

// dstをfromで更新するメソッド
function updateTodo(dst: Todo, from: Partial<Todo>): void {
	if (from.title) {
		dst.title = from.title;
	}
	if (from.description) {
		dst.description = from.description
	}
}

const todo = {
	title: "abc",
	description: "def"
};
console.log(todo);

updateTodo(todo, { title : "xyz" });
console.log(todo);
