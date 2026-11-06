import { icon } from "../icon.js";

// Drawn after Phosphor Icons "fast-forward-circle" (MIT, Copyright (c) 2023 Phosphor Icons).
export const FastForwardCircle = icon("FastForwardCircle", "fast-forward-circle", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M7.5 9v6l4-3z" }, { r: "slide", x: 1, a: 1.5, o: [9.5, 12] }],
    ["path", { d: "M12.5 9v6l4-3z" }, { r: "slide", x: 1, a: 1.5, d: 0.08, o: [14.5, 12] }],
  ],
});
