import { icon } from "../icon.js";

// Adapted from Tabler Icons "certificate-2-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Certificate2Off = icon("Certificate2Off", "certificate-2-off", {
  nodes: [
    ["path", { d: "M12 12a3 3 0 1 0 3 3" }, { r: "spin", a: 180, o: [12, 15] }],
    ["path", { d: "M11 7h3" }],
    ["path", { d: "M10 18v4l2 -1l2 1v-4" }, { r: "swing", d: 0.1, a: 8, o: [12, 18] }],
    ["path", { d: "M10 19h-2a2 2 0 0 1 -2 -2v-11m1.18 -2.825c.25 -.112 .529 -.175 .82 -.175h8a2 2 0 0 1 2 2v9m-.175 3.82a2 2 0 0 1 -1.825 1.18h-2" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M9 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "spin", a: 180, o: [12, 15] }, "cut"],
    ["path", { d: "M10 7h4" }, undefined, "line"],
    ["path", { d: "M10 18v4l2 -1l2 1v-4" }, { r: "swing", d: 0.1, a: 8, o: [12, 18] }],
    ["path", { d: "M10 19h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
