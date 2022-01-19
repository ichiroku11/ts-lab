// https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types

export const nothing = null;

// Intersection Types

type Colorful = {
	color: string;
}

type Circle = {
	radius: number;
}

type ColorfulCircle = Colorful & Circle;

function draw(circle: ColorfulCircle) {
	console.log(circle.color);
	console.log(circle.radius);
}

draw({
	color: "#cccccc",
	radius: 10
});
