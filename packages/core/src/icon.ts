import type { IconData, IconSpec } from "./types.js";

/** Declares one icon (`name` is the PascalCase export name, `key` the kebab-case file and CSS name). */
export const icon = (name: string, key: string, spec: IconSpec): IconData => ({ name, key, ...spec });
