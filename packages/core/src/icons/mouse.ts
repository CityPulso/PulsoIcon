import { icon } from "../icon.js";

export const Mouse = icon("Mouse", "mouse", {
  nodes: [
    ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "7" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 6v4" }, { r: "bounce", d: 0.05, y: 1, a: 1.5, o: [12, 8] }],
  ],
});
