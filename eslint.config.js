import { defineConfig } from "@diba1013/linter/eslint";

export default defineConfig({
	platform: "node",
	typescript: "./tsconfig.json",
	configs: [
		{
			files: ["test/**/*.ts"],
			rules: {
				// Disable matchers return 'any' tor comparisons.
				"@typescript-eslint/no-unsafe-assignment": "off",
			},
		},
	],
});
