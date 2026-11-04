import { createIcon } from "../runtime/createIcon.js";

export const AlignCenterHorizontal = createIcon("AlignCenterHorizontal", "align-center-horizontal", {
  nodes: [
    ["path", { d: "M2 12h20" }, { r: "growX", o: [12, 12] }],
    ["path", { d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" }, { r: "slide", y: -1, a: 1.5, o: [7, 12] }],
    ["path", { d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" }, { r: "slide", d: 0.08, y: -1, a: 1.5, o: [7, 12] }],
    ["path", { d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" }, { r: "slide", d: 0.1, y: 1, a: 1.5, o: [17, 12] }],
    ["path", { d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" }, { r: "slide", d: 0.18, y: 1, a: 1.5, o: [17, 12] }],
  ],
});
