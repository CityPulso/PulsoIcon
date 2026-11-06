import { icon } from "../icon.js";

// Adapted from Tabler Icons "shadow" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Shadow = icon("Shadow", "shadow", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "spin", d: 0, a: 90, o: [12, 12] }],
    ["path", { d: "M13 12h5" }, { r: "growX", d: 0.1, o: [13, 12] }],
    ["path", { d: "M13 15h4" }, { r: "growX", d: 0.15, o: [13, 15] }],
    ["path", { d: "M13 18h1" }, { r: "growX", d: 0.2, o: [13, 18] }],
    ["path", { d: "M13 9h4" }, { r: "growX", d: 0.05, o: [13, 9] }],
    ["path", { d: "M13 6h1" }, { r: "growX", d: 0, o: [13, 6] }],
  ],
});
