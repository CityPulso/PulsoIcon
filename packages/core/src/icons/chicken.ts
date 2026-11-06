import { icon } from "../icon.js";

export const Chicken = icon("Chicken", "chicken", {
  nodes: [
    ["path", { d: "M5 9a3 3 0 0 1 6 0v2h6l3-4v5a6 6 0 0 1-6 6h-3a6 6 0 0 1-6-6Z" }, { r: "bounce", y: -1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M5 9 3 10l2 1" }, { r: "bounce", y: -1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M7 6.2a1 1 0 0 1 1.5-1.5 1 1 0 0 1 1.7 1" }, { r: "bounce", y: -1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M8 8.5h.01" }, { r: "blink", d: 0.2, o: [8, 8.5] }],
    ["path", { d: "M11 18v3" }, { r: "press", a: 0.1, o: [13, 21] }],
    ["path", { d: "M15 18v3" }, { r: "press", a: 0.1, o: [13, 21] }],
  ],
});
