import { icon } from "../icon.js";

// Drawn after Phosphor Icons "skip-forward-circle" (MIT, Copyright (c) 2023 Phosphor Icons).
export const SkipForwardCircle = icon("SkipForwardCircle", "skip-forward-circle", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["polygon", { points: "8 8.5 8 15.5 13.5 12 8 8.5" }, { r: "slide", x: 1, a: 1.5, o: [10.75, 12] }],
    ["path", { d: "M16 8.5v7" }, { r: "jelly", d: 0.1, o: [16, 12] }],
  ],
});
