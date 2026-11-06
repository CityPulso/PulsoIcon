import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-autofit-width" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowAutofitWidth = icon("ArrowAutofitWidth", "arrow-autofit-width", {
  nodes: [
    ["path", { d: "M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" }, { r: "press", a: 0.05, o: [12, 8] }],
    ["path", { d: "M10 18h-7" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [6.5, 18] }],
    ["path", { d: "M21 18h-7" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [17.5, 18] }],
    ["path", { d: "M6 15l-3 3l3 3" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [4.5, 18] }],
    ["path", { d: "M18 15l3 3l-3 3" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [19.5, 18] }],
  ],
});
