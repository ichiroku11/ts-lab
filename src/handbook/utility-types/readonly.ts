// Readonly<Type>
// https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype

export const nothing = null;

// Readonly<Type>でTypeのプロパティが読み取り専用になる

interface Todo {
	title: string;
}

const todo: Readonly<Todo> = {
	title: "abc"
};
console.log(todo);

// Cannot assign to 'title' because it is a read-only property.
//todo.title = "def";
