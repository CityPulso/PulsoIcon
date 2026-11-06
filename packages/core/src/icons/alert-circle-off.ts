import { icon } from "../icon.js";

// Adapted from Tabler Icons "alert-circle-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlertCircleOff = icon("AlertCircleOff", "alert-circle-off", {
  nodes: [
    ["path", { d: "M5.644 5.629a9 9 0 1 0 12.715 12.741m1.693 -2.349a9 9 0 0 0 -12.087 -12.068" }],
    ["path", { d: "M12 7v1" }, { r: "draw" }],
    ["path", { d: "M12 16h.01" }, { r: "pop", d: 0.1, o: [12, 16] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }, { r: "draw" }, "line"],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }, { r: "pop", d: 0.1, o: [12, 16] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
