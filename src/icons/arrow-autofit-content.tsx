import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "arrow-autofit-content" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowAutofitContent = createIcon("ArrowAutofitContent", "arrow-autofit-content", {
  nodes: [
    ["path", { d: "M6 4l-3 3l3 3" }, { r: "slide", x: -1, a: 1.5, o: [4.5, 7] }],
    ["path", { d: "M18 4l3 3l-3 3" }, { r: "slide", x: 1, a: 1.5, o: [19.5, 7] }],
    ["path", { d: "M4 16a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -2" }, { r: "pulse", o: [12, 17] }],
    ["path", { d: "M10 7h-7" }, { r: "slide", x: -1, a: 1.5, o: [6.5, 7] }],
    ["path", { d: "M21 7h-7" }, { r: "slide", x: 1, a: 1.5, o: [17.5, 7] }],
  ],
});
