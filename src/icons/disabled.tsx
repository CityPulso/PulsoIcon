import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "disabled" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Disabled = createIcon("Disabled", "disabled", {
  nodes: [
    ["path", { d: "M9 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "bounce", y: -1, a: 1 }],
    ["path", { d: "M11 7l0 8l4 0l4 5" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M11 11l5 0" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M7 11.5a5 5 0 1 0 6 7.5" }, { r: "spin", a: 360, o: [8.9, 16.1] }],
  ],
});
