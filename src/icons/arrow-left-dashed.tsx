import { createIcon } from "../runtime/createIcon.js";

export const ArrowLeftDashed = createIcon("ArrowLeftDashed", "arrow-left-dashed", {
  nodes: [
    ["path", { d: "M20 12h-2" }, { r: "fade", o: [19, 12] }],
    ["path", { d: "M15 12h-2" }, { r: "fade", d: 0.06, o: [14, 12] }],
    ["path", { d: "M10 12H5" }, { r: "bounce", d: 0.12, x: -1, a: 2, o: [7.5, 12] }],
    ["path", { d: "m12 19-7-7 7-7" }, { r: "bounce", d: 0.12, x: -1, a: 2, o: [8.5, 12] }],
  ],
});
