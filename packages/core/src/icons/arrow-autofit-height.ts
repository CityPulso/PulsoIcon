import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-autofit-height" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowAutofitHeight = icon("ArrowAutofitHeight", "arrow-autofit-height", {
  nodes: [
    ["path", { d: "M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6" }, { r: "press", a: 0.05, o: [8, 12] }],
    ["path", { d: "M18 14v7" }, { r: "slide", d: 0.1, y: 1, a: 1.5, o: [18, 17.5] }],
    ["path", { d: "M18 3v7" }, { r: "slide", d: 0.1, y: -1, a: 1.5, o: [18, 6.5] }],
    ["path", { d: "M15 18l3 3l3 -3" }, { r: "slide", d: 0.1, y: 1, a: 1.5, o: [18, 19.5] }],
    ["path", { d: "M15 6l3 -3l3 3" }, { r: "slide", d: 0.1, y: -1, a: 1.5, o: [18, 4.5] }],
  ],
});
