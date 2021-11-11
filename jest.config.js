module.exports = {
	collectCoverageFrom: ["tests/**/*.ts"],
	preset: "ts-jest",
	roots: ["tests/"],
	testEnvironment: "node",
	testRegex: ".*\\.ts$"
};
