import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "arrows-in-line-horizontal" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ArrowsInLineHorizontal = createIcon("ArrowsInLineHorizontal", "arrows-in-line-horizontal", {
  nodes: [
    ["path", { d: "M12 3v18" }, { r: "grow", o: [12, 12] }],
    ["path", { d: "M3 12h6" }, { r: "slide", x: 1, a: 1.5, o: [6, 12] }],
    ["path", { d: "m6 9 3 3-3 3" }, { r: "slide", x: 1, a: 1.5, o: [6, 12] }],
    ["path", { d: "M21 12h-6" }, { r: "slide", x: -1, a: 1.5, o: [18, 12] }],
    ["path", { d: "m18 9-3 3 3 3" }, { r: "slide", x: -1, a: 1.5, o: [18, 12] }],
  ],
});
