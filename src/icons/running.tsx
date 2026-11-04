import { createIcon } from "../runtime/createIcon.js";

export const Running = createIcon("Running", "running", {
  nodes: [
    ["circle", { cx: "15", cy: "4", r: "1" }, { r: "bounce", y: -1, a: 1.2, o: [12, 12] }],
    ["path", { d: "m13 8-2 5" }, { r: "bounce", y: -1, a: 1.2, o: [12, 12] }],
    ["path", { d: "m11 13 4 2.5-.5 4.5" }, { r: "swing", d: 0.05, a: -14, o: [11, 13] }],
    ["path", { d: "m11 13-3 3-3-1" }, { r: "swing", d: 0.05, a: 14, o: [11, 13] }],
    ["path", { d: "M6 9.5 9 8h4l3 3 2.5-1.5" }, { r: "swing", d: 0.1, a: 10, o: [13, 8] }],
  ],
});
