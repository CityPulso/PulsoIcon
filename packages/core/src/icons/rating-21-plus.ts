import { icon } from "../icon.js";

// Adapted from Tabler Icons "rating-21-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Rating21Plus = icon("Rating21Plus", "rating-21-plus", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M13 15v-6" }, { r: "pop", o: [13, 12] }],
    ["path", { d: "M15.5 12h3" }, { r: "spin", d: 0.2, a: 90, o: [17, 12] }],
    ["path", { d: "M17 10.5v3" }, { r: "spin", d: 0.2, a: 90, o: [17, 12] }],
    ["path", { d: "M7 10.5a1.5 1.5 0 0 1 3 0c0 .443 -.313 .989 -.612 1.393l-2.388 3.107h3" }, { r: "pop", o: [8.5, 12] }],
  ],
});
