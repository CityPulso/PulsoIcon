import { createIcon } from "../runtime/createIcon.js";

export const ArrowRightDashed = createIcon("ArrowRightDashed", "arrow-right-dashed", {
  nodes: [
    ["path", { d: "M4 12h2" }, { r: "fade", o: [5, 12] }],
    ["path", { d: "M9 12h2" }, { r: "fade", d: 0.06, o: [10, 12] }],
    ["path", { d: "M14 12h5" }, { r: "bounce", d: 0.12, x: 1, a: 2, o: [16.5, 12] }],
    ["path", { d: "m12 5 7 7-7 7" }, { r: "bounce", d: 0.12, x: 1, a: 2, o: [15.5, 12] }],
  ],
});
