// Pick<Type, Keys>
// https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys

export const nothing = null;

// Pick<Type, Keys>
// 型の指定したキーだけを持つ型を表す

interface Todo {
	title: string;
	description: string;
	completed: boolean;
}

// TodoPreview: title、completedプロパティだけを持つ型
type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
	title: "abc",
	completed: false,
};
console.log(todo);
