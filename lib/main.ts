#!/usr/bin/env node

export type MainOutput = {
	name: string;
	version: string;
	description: string;
	path: string;
};

export function prepare(): MainOutput {
	return {
		name: process.env.__NAME__ ?? "unknown",
		version: process.env.__VERSION__ ?? "0.0.0",
		description: "A basic test for a random package",
		path: import.meta.dirname,
	};
}

console.log(prepare());
