import { icon } from "../icon.js";

// Drawn after Phosphor Icons "rewind-circle" (MIT, Copyright (c) 2023 Phosphor Icons).
export const RewindCircle = icon("RewindCircle", "rewind-circle", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["polygon", { points: "12 8.5 7.5 12 12 15.5 12 8.5" }, { r: "slide", d: 0.06, x: -1, a: 1.5, o: [9.75, 12] }],
    ["polygon", { points: "16.5 8.5 12 12 16.5 15.5 16.5 8.5" }, { r: "slide", x: -1, a: 1.5, o: [14, 12] }],
  ],
});
