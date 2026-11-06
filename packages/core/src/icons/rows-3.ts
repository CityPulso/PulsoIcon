import { icon } from "../icon.js";

export const Rows3 = icon("Rows3", "rows-3", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M21 9H3" }, { r: "growX", d: 0.05, o: [12, 9] }],
    ["path", { d: "M21 15H3" }, { r: "growX", d: 0.12, o: [12, 15] }],
  ],
});
