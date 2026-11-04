import { createIcon } from "../runtime/createIcon.js";

export const Notebook = createIcon("Notebook", "notebook", {
  nodes: [
    ["path", { d: "M2 6h4" }, { r: "growX", d: 0.05, o: [2, 12] }],
    ["path", { d: "M2 10h4" }, { r: "growX", d: 0.09, o: [2, 12] }],
    ["path", { d: "M2 14h4" }, { r: "growX", d: 0.13, o: [2, 12] }],
    ["path", { d: "M2 18h4" }, { r: "growX", d: 0.17, o: [2, 12] }],
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M16 2v20" }, { r: "grow", d: 0.15, o: [16, 2] }],
  ],
});
