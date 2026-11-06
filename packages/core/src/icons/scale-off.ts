import { icon } from "../icon.js";

// Adapted from Tabler Icons "scale-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ScaleOff = icon("ScaleOff", "scale-off", {
  nodes: [
    ["path", { d: "M7 20h10" }],
    ["path", { d: "M9.452 5.425l2.548 -.425l6 1" }, { r: "turn", a: 8, o: [12, 5] }],
    ["path", { d: "M12 3v5m0 4v8" }, { r: "press", o: [12, 20] }],
    ["path", { d: "M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" }, { r: "turn", a: 8, o: [12, 5] }],
    ["path", { d: "M18.873 14.871a3 3 0 0 0 2.127 -2.871l-3 -6l-2.677 5.355" }, { r: "turn", a: 8, o: [12, 5] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M12 3v18", fill: "none" }, { r: "press", o: [12, 20] }],
    ["path", { d: "m19 8 3 8a5 5 0 0 1-6 0zV7" }, { r: "turn", a: 8, o: [12, 5] }],
    ["path", { d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1", fill: "none" }, { r: "turn", a: 8, o: [12, 5] }],
    ["path", { d: "m5 8 3 8a5 5 0 0 1-6 0zV7" }, { r: "turn", a: 8, o: [12, 5] }],
    ["path", { d: "M7 21h10", fill: "none" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
