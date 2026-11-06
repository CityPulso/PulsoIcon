import { icon } from "../icon.js";

// Adapted from Tabler Icons "sphere-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SphereOff = icon("SphereOff", "sphere-off", {
  nodes: [
    ["path", { d: "M3 12c0 1.657 4.03 3 9 3c.987 0 1.936 -.053 2.825 -.15m3.357 -.67c1.735 -.547 2.818 -1.32 2.818 -2.18" }, { r: "roll", a: 1, o: [12, 12] }],
    ["path", { d: "M20.051 16.027a9 9 0 0 0 -12.083 -12.075m-2.34 1.692a9 9 0 0 0 12.74 12.716" }, { r: "roll", a: 1, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "roll", a: 1, o: [12, 12] }],
    ["ellipse", { cx: "12", cy: "12", rx: "10", ry: "4" }, { r: "roll", a: 1, o: [12, 12] }, "cut"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
