import { createIcon } from "../runtime/createIcon.js";

export const PanelsLeftBottom = createIcon("PanelsLeftBottom", "panels-left-bottom", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 3v18" }, { r: "grow", d: 0.05, o: [9, 3] }],
    ["path", { d: "M9 15h12" }, { r: "growX", d: 0.15, o: [9, 15] }],
  ],
});
