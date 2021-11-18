import { foo } from "../continuousintegrationdependency";

test("it works", () => {
	const result = foo();
	expect(true).toBeTruthy();
});

test("it works 2", () => {
	expect(true).toBeTruthy();
});
