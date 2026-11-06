import { icon } from "../icon.js";

// Drawn after Phosphor Icons "stool" (MIT, Copyright (c) 2023 Phosphor Icons).

export const Stool = icon("Stool", "stool", {
  nodes: [
    ["rect", { width: "14", height: "4", x: "5", y: "3", rx: "1" }, { r: "press", a: 0.08, o: [12, 7] }],
    ["path", { d: "M8 7 6 21" }],
    ["path", { d: "m16 7 2 14" }],
    ["path", { d: "M7 15h10" }, { r: "growX", d: 0.1, o: [12, 15] }],
  ],
});
