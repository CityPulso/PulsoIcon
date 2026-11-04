import { createIcon } from "../runtime/createIcon.js";

export const EaseCurveControlPoints = createIcon("EaseCurveControlPoints", "ease-curve-control-points", {
  nodes: [
    ["path", { d: "M4 20C17 20 7 4 20 4" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "M4 20h9" }, { r: "growX", d: 0.3, o: [4, 20] }],
    ["path", { d: "M20 4h-9" }, { r: "growX", d: 0.3, o: [20, 4] }],
    ["circle", { cx: "15", cy: "20", r: "2" }, { r: "pop", d: 0.4, o: [15, 20] }],
    ["circle", { cx: "9", cy: "4", r: "2" }, { r: "pop", d: 0.45, o: [9, 4] }],
  ],
});
