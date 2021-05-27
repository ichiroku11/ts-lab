// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const
// https://typescript-jp.gitbook.io/deep-dive/type-system/readonly

// exportするとtsファイル間で名前が衝突しても問題ない様子
export const readonlyAndConst = null;

// constは変数の値を変更できないようにするだけ
// なので配列は値の追加・変更・削除ができる
// values1: number[]
const values1 = [1, 2, 3];

// 追加
values1.push(4);
console.log(values1);
// [1, 2, 3, 4]

// 変更
values1[3] = 0;
console.log(values1);
// [1, 2, 3, 0]

// 削除
values1.pop();
console.log(values1);
// [1, 2, 3]

// as constを使うと変数はreadonlyなリテラルになる
// values2: readonly [1, 2, 3]
const values2 = [1, 2, 3] as const;
console.log(values2);
// [1, 2, 3]

// 以下はエラー
/*
values2.push(0);
values2[0] = 0;
values2.pop();
*/
