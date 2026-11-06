import { icon } from "../icon.js";

// Adapted from Tabler Icons "rugby" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Rugby = icon("Rugby", "rugby", {
  nodes: [
    ["path", { d: "M14 15h-4v6h4v-6" }, { r: "grow", o: [12, 21] }],
    ["path", { d: "M12 15v-4" }, { r: "grow", d: 0.15, o: [12, 15] }],
    ["path", { d: "M8 21h8" }],
    ["path", { d: "M19 3v8h-14v-8" }, { r: "press", a: 0.06, o: [12, 11] }],
  ],
});
