import { icon } from "../icon.js";

// Adapted from Tabler Icons "wiper" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Wiper = icon("Wiper", "wiper", {
  nodes: [
    ["path", { d: "M11 18a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "pulse", a: 0.1, o: [12, 18] }],
    ["path", { d: "M3 9l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0" }],
    ["path", { d: "M12 18l-2.2 -12.8" }, { r: "ring", a: 25, o: [12, 18] }],
  ],
});
