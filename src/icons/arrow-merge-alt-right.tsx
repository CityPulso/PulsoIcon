import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-merge-alt-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowMergeAltRight = createIcon("ArrowMergeAltRight", "arrow-merge-alt-right", {
  nodes: [
    ["path", { d: "M16 7l-4 -4l-4 4" }, { r: "slide", d: 0.2, y: -1, a: 1.5, o: [12, 5] }],
    ["path", { d: "M6 21v.01" }, { r: "fade", d: 0.3, o: [6, 21] }],
    ["path", { d: "M6 18.01v.01" }, { r: "fade", d: 0.24, o: [6, 18] }],
    ["path", { d: "M7 15.02v.01" }, { r: "fade", d: 0.18, o: [7, 15] }],
    ["path", { d: "M10 13.03v.01" }, { r: "fade", d: 0.12, o: [10, 13] }],
    ["path", { d: "M12 3v5.394a6.737 6.737 0 0 0 3 5.606a6.737 6.737 0 0 1 3 5.606v1.394" }, { r: "drawBack", o: [15, 12] }],
  ],
});
