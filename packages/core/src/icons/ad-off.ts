import { icon } from "../icon.js";

// Adapted from Tabler Icons "ad-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AdOff = icon("AdOff", "ad-off", {
  text: true,
  nodes: [
    ["path", { d: "M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" }],
    ["path", { d: "M7 15v-4a2 2 0 0 1 2 -2m2 2v4" }, { r: "pop", a: 0.15, o: [12, 12] }],
    ["path", { d: "M7 13h4" }, { r: "pop", a: 0.15, o: [12, 12] }],
    ["path", { d: "M17 9v4" }, { r: "pop", a: 0.15, o: [12, 12] }],
    ["path", { d: "M16.115 12.131c.33 .149 .595 .412 .747 .74" }, { r: "pop", a: 0.15, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M10 13H6" }, { r: "pop", a: 0.15, o: [12, 12] }, "line"],
    ["path", { d: "M10 15v-4a2 2 0 0 0-4 0v4" }, { r: "pop", a: 0.15, o: [12, 12] }, "line"],
    ["path", { d: "M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z" }, { r: "pop", a: 0.15, o: [12, 12] }, "line"],
    ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
