import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "text-wrap-disabled" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TextWrapDisabled = createIcon("TextWrapDisabled", "text-wrap-disabled", {
  nodes: [
    ["path", { d: "M4 6l10 0" }, { r: "growX", o: [4, 6] }],
    ["path", { d: "M4 18l10 0" }, { r: "growX", d: 0.1, o: [4, 18] }],
    ["path", { d: "M4 12h17l-3 -3m0 6l3 -3" }, { r: "slide", x: 1, a: 2 }],
  ],
});
