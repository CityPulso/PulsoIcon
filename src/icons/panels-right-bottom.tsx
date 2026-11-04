import { createIcon } from "../runtime/createIcon.js";

export const PanelsRightBottom = createIcon("PanelsRightBottom", "panels-right-bottom", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 15h12" }, { r: "growX", d: 0.15, o: [3, 15] }],
    ["path", { d: "M15 3v18" }, { r: "grow", d: 0.05, o: [15, 3] }],
  ],
});
