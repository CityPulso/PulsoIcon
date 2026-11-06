import { icon } from "../icon.js";

// Drawn after Phosphor Icons "subtract" (MIT, Copyright (c) 2023 Phosphor Icons).

export const Subtract = icon("Subtract", "subtract", {
  nodes: [
    ["circle", { cx: "9", cy: "9", r: "6.5" }],
    ["circle", { cx: "15", cy: "15", r: "6.5" }, { r: "slide", x: 1, y: 1, a: 1.5 }],
    ["path", { d: "M18.5 12L12 18.5" }, { r: "draw", d: 0.15, o: [15.25, 15.25] }],
    ["path", { d: "M19.87 15.63L15.63 19.87" }, { r: "draw", d: 0.25, o: [17.75, 17.75] }],
  ],
});
