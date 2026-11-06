import { icon } from "../icon.js";

export const NotebookText = icon("NotebookText", "notebook-text", {
  nodes: [
    ["path", { d: "M2 6h4" }, { r: "growX", d: 0.05, o: [2, 12] }],
    ["path", { d: "M2 10h4" }, { r: "growX", d: 0.09, o: [2, 12] }],
    ["path", { d: "M2 14h4" }, { r: "growX", d: 0.13, o: [2, 12] }],
    ["path", { d: "M2 18h4" }, { r: "growX", d: 0.17, o: [2, 12] }],
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M9.5 8h5" }, { r: "growX", d: 0.15, o: [9.5, 12] }],
    ["path", { d: "M9.5 12H16" }, { r: "growX", d: 0.2, o: [9.5, 12] }],
    ["path", { d: "M9.5 16H14" }, { r: "growX", d: 0.25, o: [9.5, 12] }],
  ],
});
