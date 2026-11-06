import { icon } from "../icon.js";

// Drawn after Phosphor Icons "highlighter-circle" (MIT, Copyright (c) 2023 Phosphor Icons).
export const HighlighterCircle = icon("HighlighterCircle", "highlighter-circle", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8.5 21.4V15a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6.4" }, { r: "tilt", a: 8, o: [12, 21] }],
    ["path", { d: "M10 14V9l4-2v7" }, { r: "tilt", a: 8, o: [12, 21] }],
  ],
});
