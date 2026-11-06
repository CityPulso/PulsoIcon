import { icon } from "../icon.js";

// Drawn after Phosphor Icons "swap" (MIT, Copyright (c) 2023 Phosphor Icons).
export const Swap = icon("Swap", "swap", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M7 9h10" }, { r: "slide", x: 1, a: 1.5, o: [12, 9] }],
    ["path", { d: "m14.5 6.5 2.5 2.5-2.5 2.5" }, { r: "slide", x: 1, a: 1.5, o: [12, 9] }],
    ["path", { d: "M17 15H7" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [12, 15] }],
    ["path", { d: "m9.5 12.5-2.5 2.5 2.5 2.5" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [12, 15] }],
  ],
});
