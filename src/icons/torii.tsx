import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "torii" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Torii = createIcon("Torii", "torii", {
  nodes: [
    ["path", { d: "M4 4c5.333 1.333 10.667 1.333 16 0" }, { r: "draw" }],
    ["path", { d: "M4 8h16" }, { r: "growX", d: 0.15, o: [12, 8] }],
    ["path", { d: "M12 5v3" }, { r: "grow", d: 0.25, o: [12, 8] }],
    ["path", { d: "M18 4.5v15.5" }, { r: "grow", d: 0.05, o: [18, 20] }],
    ["path", { d: "M6 4.5v15.5" }, { r: "grow", d: 0.05, o: [6, 20] }],
  ],
});
