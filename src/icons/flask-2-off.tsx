import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "flask-2-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Flask2Off = createIcon("Flask2Off", "flask-2-off", {
  nodes: [
    ["path", { d: "M6.1 15h8.9" }, { r: "sway", a: 4, o: [12, 21] }],
    ["path", { d: "M17.742 17.741a6 6 0 0 1 -2.424 3.259h-6.635a6 6 0 0 1 1.317 -10.66v-.326m0 -4.014v-3h4v7m.613 .598a6 6 0 0 1 2.801 2.817" }, { r: "sway", a: 4, o: [12, 21] }],
    ["path", { d: "M9 3h6" }, { r: "sway", a: 4, o: [12, 21] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M6.1 15h11.8" }, { r: "sway", a: 4, o: [12, 21] }, "line"],
    ["path", { d: "M14 3v7.342a6 6 0 0 1 1.318 10.658h-6.635a6 6 0 0 1 1.317 -10.66v-7.34h4" }, { r: "sway", a: 4, o: [12, 21] }],
    ["path", { d: "M9 3h6", fill: "none" }, { r: "sway", a: 4, o: [12, 21] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
