import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "wallpaper-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WallpaperOff = createIcon("WallpaperOff", "wallpaper-off", {
  nodes: [
    ["path", { d: "M10 6h8a2 2 0 0 1 2 2v8m-.58 3.409a2 2 0 0 1 -1.42 .591h-12" }, { r: "press", o: [12, 12] }],
    ["path", { d: "M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "roll", a: 0.5, o: [6, 18] }],
    ["path", { d: "M8 18v-10m-3.427 -3.402c-.353 .362 -.573 .856 -.573 1.402v12" }, { r: "press", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M12 17v4", fill: "none" }, { r: "roll", a: 0.5, o: [6, 18] }],
    ["path", { d: "M8 21h8", fill: "none" }, { r: "roll", a: 0.5, o: [6, 18] }],
    ["path", { d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15" }, { r: "press", o: [12, 12] }, "line"],
    ["circle", { cx: "8", cy: "9", r: "2" }, { r: "press", o: [12, 12] }, "cut"],
    ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }, { r: "press", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
