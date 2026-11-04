import { createIcon } from "../runtime/createIcon.js";

export const LineDotLeftHorizontal = createIcon("LineDotLeftHorizontal", "line-dot-left-horizontal", {
  nodes: [
    ["path", { d: "M9 12h12" }, { r: "growX", d: 0.1, o: [21, 12] }],
    ["circle", { cx: "6", cy: "12", r: "3" }, { r: "bounce", x: -1, a: 2, o: [6, 12] }],
  ],
});
