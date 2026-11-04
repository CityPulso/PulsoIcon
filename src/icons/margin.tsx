import { createIcon } from "../runtime/createIcon.js";

export const Margin = createIcon("Margin", "margin", {
  nodes: [
    ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1" }, { r: "pulse", a: 0.2, o: [12, 12] }],
    ["path", { d: "M21 6v12" }, { r: "slide", d: 0.05, x: 1, a: 1, o: [21, 12] }],
    ["path", { d: "M3 6v12" }, { r: "slide", d: 0.15, x: -1, a: 1, o: [3, 12] }],
    ["path", { d: "M6 21h12" }, { r: "slide", d: 0.1, y: 1, a: 1, o: [12, 21] }],
    ["path", { d: "M6 3h12" }, { r: "slide", y: -1, a: 1, o: [12, 3] }],
  ],
});
