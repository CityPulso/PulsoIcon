import { icon } from "../icon.js";

export const PanelsTopLeft = icon("PanelsTopLeft", "panels-top-left", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 9h18" }, { r: "growX", d: 0.05, o: [3, 9] }],
    ["path", { d: "M9 21V9" }, { r: "grow", d: 0.15, o: [9, 9] }],
  ],
});
