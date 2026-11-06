import { icon } from "../icon.js";

// Solid from Tabler Icons "circle" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircleOff = icon("CircleOff", "circle-off", {
  nodes: [
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65" }, { r: "fade", o: [11.988, 12.009] }],
    ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92" }, { r: "fade", o: [11.988, 12.009] }],
  ],
  solid: [
    ["path", { d: "M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z", stroke: "none" }, { r: "fade", o: [11.988, 12.009] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
