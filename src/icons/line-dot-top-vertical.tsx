import { createIcon } from "../runtime/createIcon.js";

export const LineDotTopVertical = createIcon("LineDotTopVertical", "line-dot-top-vertical", {
  nodes: [
    ["path", { d: "M12 9v12" }, { r: "grow", d: 0.1, o: [12, 21] }],
    ["circle", { cx: "12", cy: "6", r: "3" }, { r: "bounce", y: -1, a: 2, o: [12, 6] }],
  ],
});
