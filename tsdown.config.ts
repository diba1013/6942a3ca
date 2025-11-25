import metadata from "./package.json" with { type: "json" };
import { defineConfig } from "tsdown";

const { name, version } = metadata;

export default defineConfig({
	name,
	shims: true,
	dts: true,
	platform: "node",
	entry: {
		index: "lib/main.ts",
	},
	format: ["cjs", "esm"],
	env: {
		__NAME__: name,
		__VERSION__: version,
	},
});
