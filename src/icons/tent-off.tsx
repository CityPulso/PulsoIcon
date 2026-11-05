import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "tent-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TentOff = createIcon("TentOff", "tent-off", {
  nodes: [
    ["path", { d: "M11 14l4 6h5m-2.863 -6.868l-5.137 -9.132l-1.44 2.559m-1.44 2.563l-6.12 10.878h6l4 -6" }, { r: "jelly", o: [12, 20] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M3.5 21 14 3", fill: "none" }, { r: "jelly", o: [12, 20] }],
    ["path", { d: "M20.5 21 10 3", fill: "none" }, { r: "jelly", o: [12, 20] }],
    ["path", { d: "M15.5 21 12 15l-3.5 6", fill: "none" }, { r: "jelly", o: [12, 20] }],
    ["path", { d: "M2 21h20", fill: "none" }, { r: "jelly", o: [12, 20] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
