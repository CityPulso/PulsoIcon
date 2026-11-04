import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-merge-alt-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowMergeAltLeft = createIcon("ArrowMergeAltLeft", "arrow-merge-alt-left", {
  nodes: [
    ["path", { d: "M8 7l4 -4l4 4" }, { r: "slide", d: 0.2, y: -1, a: 1.5, o: [12, 5] }],
    ["path", { d: "M18 21v.01" }, { r: "fade", d: 0.3, o: [18, 21] }],
    ["path", { d: "M18 18.01v.01" }, { r: "fade", d: 0.24, o: [18, 18] }],
    ["path", { d: "M17 15.02v.01" }, { r: "fade", d: 0.18, o: [17, 15] }],
    ["path", { d: "M14 13.03v.01" }, { r: "fade", d: 0.12, o: [14, 13] }],
    ["path", { d: "M12 3v5.394a6.737 6.737 0 0 1 -3 5.606a6.737 6.737 0 0 0 -3 5.606v1.394" }, { r: "draw", o: [9, 12] }],
  ],
});
