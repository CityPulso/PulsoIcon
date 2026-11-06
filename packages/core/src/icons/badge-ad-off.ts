import { icon } from "../icon.js";

// Adapted from Tabler Icons "badge-ad-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BadgeAdOff = icon("BadgeAdOff", "badge-ad-off", {
  text: true,
  nodes: [
    ["path", { d: "M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" }, { r: "pulse", a: 0.05, o: [12, 12] }],
    ["path", { d: "M14 14v1h1m2 -2v-2a2 2 0 0 0 -2 -2h-1v1" }, { r: "pulse", a: 0.05, o: [12, 12] }],
    ["path", { d: "M7 15v-4.5a1.5 1.5 0 0 1 2.077 -1.385m.788 .762c.087 .19 .135 .4 .135 .623v4.5" }, { r: "pulse", a: 0.05, o: [12, 12] }],
    ["path", { d: "M7 13h3" }, { r: "pulse", a: 0.05, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" }, { r: "pulse", a: 0.05, o: [12, 12] }],
    ["path", { d: "M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1" }, { r: "pulse", a: 0.05, o: [12, 12] }, "line"],
    ["path", { d: "M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5" }, { r: "pulse", a: 0.05, o: [12, 12] }, "line"],
    ["path", { d: "M7 13h3" }, { r: "pulse", a: 0.05, o: [12, 12] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
