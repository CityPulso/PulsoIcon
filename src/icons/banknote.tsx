import { createIcon } from "../runtime/createIcon.js";

export const Banknote = createIcon("Banknote", "banknote", {
  nodes: [
    ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }, { r: "flip", o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "spin", d: 0.1, a: -360, o: [12, 12] }],
    ["path", { d: "M6 12h.01M18 12h.01" }, { r: "fade", d: 0.2, o: [12.005, 12] }],
  ],
});
