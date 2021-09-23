// Omit<Type, Keys>
// https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys

export const nothing = null;

// Omit<Type, Keys>
// 型の指定したキーを除いたをプロパティを持つ型を表す

interface Todo {
	title: string;
	description: string;
	completed: boolean;
}

// TodoPreview: title、completedプロパティだけを持つ型
type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
	title: "abc",
	completed: false,
};
console.log(todo);
