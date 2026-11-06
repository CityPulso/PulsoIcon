import { icon } from "../icon.js";

// Drawn after Phosphor Icons "dresser" (MIT, Copyright (c) 2023 Phosphor Icons).
export const Dresser = icon("Dresser", "dresser", {
  nodes: [
    ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }],
    ["path", { d: "M4 9h16" }],
    ["path", { d: "M4 15h16" }],
    ["path", { d: "M11 5.5h2" }, { r: "slide", y: 1, a: 1, o: [12, 5.5] }],
    ["path", { d: "M11 12h2" }, { r: "slide", y: 1, a: 1, d: 0.1, o: [12, 12] }],
    ["path", { d: "M11 18.5h2" }, { r: "slide", y: 1, a: 1, d: 0.2, o: [12, 18.5] }],
  ],
});
