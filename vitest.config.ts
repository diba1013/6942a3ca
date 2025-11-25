import { defineConfig } from "vitest/config";

export default defineConfig({
	resolve: {
		alias: {
			"~": "/lib",
		},
	},
	test: {
		environment: "node",
		restoreMocks: true,
		coverage: {
			provider: "v8",
			enabled: true,
			all: true,
			include: ["lib/**/*.ts"],
			exclude: ["lib/**/*.types.ts"],
			reporter: ["html", "text-summary", "lcovonly"],
		},
		env: {
			__NAME__: "typescript-starter",
			__VERSION__: "1.0.0",
		},
	},
});
