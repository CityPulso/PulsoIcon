import { icon } from "../icon.js";

export const Dino = icon("Dino", "dino", {
  svg: { r: "bounce", y: -1, a: 3, o: [12, 21] },
  nodes: [
    ["path", { d: "M14 8V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3h-7" }],
    ["path", { d: "M14 8v5a5 5 0 0 1-5 5H8a4 4 0 0 1-4-4V9" }],
    ["path", { d: "M4 9 2 7" }, { r: "swing", d: 0.1, a: 20, o: [4, 9] }],
    ["path", { d: "M14 12h2v1" }, { r: "swing", d: 0.1, a: 15, o: [14, 12] }],
    ["path", { d: "M7 18v3" }, { r: "swing", d: 0.15, a: 20, o: [7, 18] }],
    ["path", { d: "M11 18v3" }, { r: "swing", d: 0.2, a: -20, o: [11, 18] }],
    ["path", { d: "M18 5.5h.01" }, { r: "blink", d: 0.3, o: [18, 5.5] }],
  ],
});
