// Type checks for the Svelte package (svelte-check reads this file; it never runs). The full icon set is too large for svelte-check,
// so one generated component stands in for all of them: they are produced by the same template.
import type { PulsoIcon } from "../src/types.js";

import Bell from "../src/icons/bell.svelte";

export const icon: PulsoIcon = Bell;
