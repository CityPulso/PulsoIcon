import { createIcon } from "../runtime/createIcon.js";

export const RectangleEllipsis = createIcon("RectangleEllipsis", "rectangle-ellipsis", {
  nodes: [
    ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 12h.01" }, { r: "bounce", d: 0.13, y: -1, a: 1.5, o: [12.005, 12] }],
    ["path", { d: "M17 12h.01" }, { r: "bounce", d: 0.21, y: -1, a: 1.5, o: [17.005, 12] }],
    ["path", { d: "M7 12h.01" }, { r: "bounce", d: 0.05, y: -1, a: 1.5, o: [7.005, 12] }],
  ],
});
