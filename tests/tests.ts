import { foo } from "../continuousintegrationdependency";

test("it works", () => {
	const result = foo();
	expect(true).toBeTruthy();
});

test("it no works", () => {
	expect(true).toBeFalsy();
});
