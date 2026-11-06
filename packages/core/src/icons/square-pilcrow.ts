import { icon } from "../icon.js";

export const SquarePilcrow = icon("SquarePilcrow", "square-pilcrow", {
  text: true,
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17" }, { r: "redraw", d: 0.05, o: [12, 9.5] }],
    ["path", { d: "M12 7v10" }, { r: "grow", d: 0.15, o: [12, 12] }],
    ["path", { d: "M16 7v10" }, { r: "grow", d: 0.21, o: [16, 12] }],
  ],
});
