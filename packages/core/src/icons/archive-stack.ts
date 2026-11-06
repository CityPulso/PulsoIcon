import { icon } from "../icon.js";

export const ArchiveStack = icon("ArchiveStack", "archive-stack", {
  nodes: [
    ["path", { d: "M6 3h12" }, { r: "float", d: 0.2, o: [12, 3] }],
    ["path", { d: "M4 6h16" }, { r: "float", d: 0.1, o: [12, 6] }],
    ["rect", { width: "20", height: "4", x: "2", y: "9", rx: "1" }, { r: "lift", a: -6, o: [2, 13] }],
    ["path", { d: "M4 13v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6" }, { r: "press", d: 0.05, a: 0.04, o: [12, 21] }],
    ["path", { d: "M10 17h4" }, { r: "growX", d: 0.15, o: [12, 17] }],
  ],
});
