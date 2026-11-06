import { icon } from "../icon.js";

export const Rows4 = icon("Rows4", "rows-4", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M21 7.5H3" }, { r: "growX", d: 0.05, o: [12, 12] }],
    ["path", { d: "M21 12H3" }, { r: "growX", d: 0.11, o: [12, 12] }],
    ["path", { d: "M21 16.5H3" }, { r: "growX", d: 0.17, o: [12, 12] }],
  ],
});
