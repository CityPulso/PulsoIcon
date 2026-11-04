import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "arrow-bend-double-up-right" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ArrowBendDoubleUpRight = createIcon("ArrowBendDoubleUpRight", "arrow-bend-double-up-right", {
  nodes: [
    ["path", { d: "M17 9h-6a8 8 0 0 0-8 8v3" }, { r: "drawBack", o: [10, 14] }],
    ["path", { d: "m12 4 5 5-5 5" }, { r: "slide", d: 0.25, x: 1, a: 1.5, o: [14.5, 9] }],
    ["path", { d: "m17 4 5 5-5 5" }, { r: "slide", d: 0.33, x: 1, a: 1.5, o: [19.5, 9] }],
  ],
});
