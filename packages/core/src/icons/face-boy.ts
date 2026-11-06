import { icon } from "../icon.js";

// Adapted from Tabler Icons "mood-boy" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceBoy = icon("FaceBoy", "face-boy", {
  nodes: [
    ["path", { d: "M17 4.5a9 9 0 0 1 3.864 5.89a2.5 2.5 0 0 1 -.29 4.36a9 9 0 0 1 -17.137 0a2.5 2.5 0 0 1 -.29 -4.36a9 9 0 0 1 3.746 -5.81" }],
    ["path", { d: "M9.5 16a3.5 3.5 0 0 0 5 0" }],
    ["path", { d: "M8.5 2c1.5 1 2.5 3.5 2.5 5" }, { r: "sway", a: 8, o: [11, 7] }],
    ["path", { d: "M12.5 2c1.5 2 2 3.5 2 5" }, { r: "sway", d: 0.05, a: 8, o: [14.5, 7] }],
    ["path", { d: "M9 12l.01 0" }, { r: "blink", d: 0.2, o: [9, 12] }],
    ["path", { d: "M15 12l.01 0" }, { r: "blink", d: 0.2, o: [15, 12] }],
  ],
});
