import { icon } from "../icon.js";

// Adapted from Tabler Icons "arrow-autofit-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArrowAutofitUp = icon("ArrowAutofitUp", "arrow-autofit-up", {
  nodes: [
    ["path", { d: "M12 4h-6a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8" }, { r: "press", a: 0.05, o: [8, 12] }],
    ["path", { d: "M18 20v-17" }, { r: "bounce", d: 0.1, y: -1, a: 1.5, o: [18, 11.5] }],
    ["path", { d: "M15 6l3 -3l3 3" }, { r: "bounce", d: 0.1, y: -1, a: 1.5, o: [18, 4.5] }],
  ],
});
