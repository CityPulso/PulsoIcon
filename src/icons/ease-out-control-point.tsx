import { createIcon } from "../runtime/createIcon.js";

export const EaseOutControlPoint = createIcon("EaseOutControlPoint", "ease-out-control-point", {
  nodes: [
    ["path", { d: "M4 20C4 16 6 4 20 4" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "M20 4H8" }, { r: "growX", d: 0.3, o: [20, 4] }],
    ["circle", { cx: "6", cy: "4", r: "2" }, { r: "pop", d: 0.4, o: [6, 4] }],
  ],
});
