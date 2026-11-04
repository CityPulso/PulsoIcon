import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "skip-back-circle" (MIT, Copyright (c) 2023 Phosphor Icons).
export const SkipBackCircle = createIcon("SkipBackCircle", "skip-back-circle", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["polygon", { points: "16 8.5 16 15.5 10.5 12 16 8.5" }, { r: "slide", x: -1, a: 1.5, o: [13.25, 12] }],
    ["path", { d: "M8 8.5v7" }, { r: "jelly", d: 0.1, o: [8, 12] }],
  ],
});
