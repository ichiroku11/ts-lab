import {
	assertEquals,
	assertStrictEquals
} from "testing/asserts.ts";

// Mapped Types
// https://typescriptbook.jp/reference/type-reuse/mapped-type

type Week = "weekday" | "weekend";
type DayOfWeek = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";

type WeekMap = {
	[key in Week]: {
		label: string;
		daysOfWeek: DayOfWeek[],
	};
};

Deno.test("mapped-types_確認する", () => {
	// Arrange
	// Act
	const week: WeekMap = {
		weekday: {
			label: "平日",
			daysOfWeek: ["mon", "tue", "wed", "thu", "fri"],
		},
		weekend: {
			label: "週末",
			daysOfWeek: ["sat", "sun"],
		}
	};

	// Assert
	assertStrictEquals(week["weekday"].label, "平日");
	assertEquals(week["weekday"].daysOfWeek, ["mon", "tue", "wed", "thu", "fri"]);
	assertStrictEquals(week["weekend"].label, "週末");
	assertEquals(week["weekend"].daysOfWeek, ["sat", "sun"]);
});
