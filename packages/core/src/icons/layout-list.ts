import { icon } from "../icon.js";

export const LayoutList = icon("LayoutList", "layout-list", {
  nodes: [
    ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }, { r: "press", o: [6.5, 6.5] }],
    ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }, { r: "press", d: 0.08, o: [6.5, 17.5] }],
    ["path", { d: "M14 4h7" }, { r: "growX", d: 0.1, o: [14, 12] }],
    ["path", { d: "M14 9h7" }, { r: "growX", d: 0.15, o: [14, 12] }],
    ["path", { d: "M14 15h7" }, { r: "growX", d: 0.2, o: [14, 12] }],
    ["path", { d: "M14 20h7" }, { r: "growX", d: 0.25, o: [14, 12] }],
  ],
});
