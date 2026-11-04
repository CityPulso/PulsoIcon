import { createIcon } from "../runtime/createIcon.js";

export const NotebookDot = createIcon("NotebookDot", "notebook-dot", {
  nodes: [
    ["path", { d: "M16 11.75V22" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M2 10h4" }, { r: "growX", d: 0.09, o: [2, 12] }],
    ["path", { d: "M2 14h4" }, { r: "growX", d: 0.13, o: [2, 12] }],
    ["path", { d: "M2 18h4" }, { r: "growX", d: 0.17, o: [2, 12] }],
    ["path", { d: "M2 6h4" }, { r: "growX", d: 0.05, o: [2, 12] }],
    ["path", { d: "M20 11.75V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5.65" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["circle", { cx: "18", cy: "5", r: "3" }, { r: "pop", d: 0.15, o: [18, 5] }],
  ],
});
