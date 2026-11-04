import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "arrow-bend-double-up-left" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ArrowBendDoubleUpLeft = createIcon("ArrowBendDoubleUpLeft", "arrow-bend-double-up-left", {
  nodes: [
    ["path", { d: "M7 9h6a8 8 0 0 1 8 8v3" }, { r: "drawBack", o: [14, 14] }],
    ["path", { d: "M12 4 7 9l5 5" }, { r: "slide", d: 0.25, x: -1, a: 1.5, o: [9.5, 9] }],
    ["path", { d: "M7 4 2 9l5 5" }, { r: "slide", d: 0.33, x: -1, a: 1.5, o: [4.5, 9] }],
  ],
});
