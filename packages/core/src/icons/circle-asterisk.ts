import { icon } from "../icon.js";

// Adapted from Tabler Icons "circle-asterisk" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircleAsterisk = icon("CircleAsterisk", "circle-asterisk", {
  nodes: [
    ["path", { d: "M12 8.5v7" }, { r: "spin", d: 0.1, a: 180, o: [12, 12] }],
    ["path", { d: "M9 10l6 4" }, { r: "spin", d: 0.1, a: 180, o: [12, 12] }],
    ["path", { d: "M9 14l6 -4" }, { r: "spin", d: 0.1, a: 180, o: [12, 12] }],
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }, { r: "press", d: 0, a: 0.06, o: [12, 12] }],
  ],
});
