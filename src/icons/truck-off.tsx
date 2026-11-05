import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "truck-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TruckOff = createIcon("TruckOff", "truck-off", {
  nodes: [
    ["path", { d: "M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", d: 0, o: [7, 17] }],
    ["path", { d: "M15.585 15.586a2 2 0 0 0 2.826 2.831" }, { r: "spin", d: 0, o: [17, 17] }],
    ["path", { d: "M5 17h-2v-11a1 1 0 0 1 1 -1h1m3.96 0h4.04v4m0 4v4m-4 0h6m6 0v-6h-6m-2 -5h5l3 5" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M15 18H9", fill: "none" }, { r: "spin", d: 0, o: [17, 17] }],
    ["path", { d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14", fill: "none" }, { r: "spin", d: 0, o: [17, 17] }],
    ["circle", { cx: "17", cy: "18", r: "2" }, { r: "spin", d: 0, o: [17, 17] }],
    ["circle", { cx: "7", cy: "18", r: "2" }, { r: "spin", d: 0, o: [7, 17] }],
    ["circle", { cx: "7", cy: "18", r: "4" }, { r: "spin", d: 0, o: [7, 17] }, "cut"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
