import { icon } from "../icon.js";

// Drawn after Phosphor Icons "belt" (MIT, Copyright (c) 2023 Phosphor Icons).

export const Belt = icon("Belt", "belt", {
  nodes: [
    ["path", { d: "M2 9h5" }],
    ["path", { d: "M2 15h5" }],
    ["rect", { x: "7", y: "6", width: "6", height: "12", rx: "2" }, { r: "press", a: 0.06, o: [10, 12] }],
    ["path", { d: "M22 9H11a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h11" }, { r: "slide", x: -1, a: 1.5, o: [16, 12] }],
    ["path", { d: "M16 12h.01" }, { r: "slide", x: -1, a: 1.5, o: [16, 12] }],
    ["path", { d: "M19 12h.01" }, { r: "slide", x: -1, a: 1.5, o: [16, 12] }],
  ],
});
