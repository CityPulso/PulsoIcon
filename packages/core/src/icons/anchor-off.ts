import { icon } from "../icon.js";

// Adapted from Tabler Icons "anchor-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AnchorOff = icon("AnchorOff", "anchor-off", {
  nodes: [
    ["path", { d: "M12 12v9" }, { r: "swing", a: 8, o: [12, 5] }],
    ["path", { d: "M4 13a8 8 0 0 0 14.138 5.13m1.44 -2.56a7.99 7.99 0 0 0 .422 -2.57" }, { r: "swing", a: 8, o: [12, 5] }],
    ["path", { d: "M21 13h-2" }, { r: "swing", a: 8, o: [12, 5] }],
    ["path", { d: "M5 13h-2" }, { r: "swing", a: 8, o: [12, 5] }],
    ["path", { d: "M12.866 8.873a3 3 0 1 0 -3.737 -3.747" }, { r: "swing", a: 8, o: [12, 5] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M12 6v16", fill: "none" }, { r: "swing", a: 8, o: [12, 5] }],
    ["path", { d: "m19 13 2-1a9 9 0 0 1-18 0l2 1", fill: "none" }, { r: "swing", a: 8, o: [12, 5] }],
    ["path", { d: "M9 11h6", fill: "none" }, { r: "swing", a: 8, o: [12, 5] }],
    ["circle", { cx: "12", cy: "4", r: "2" }, { r: "swing", a: 8, o: [12, 5] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
