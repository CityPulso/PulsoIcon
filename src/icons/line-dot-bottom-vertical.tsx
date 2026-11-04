import { createIcon } from "../runtime/createIcon.js";

export const LineDotBottomVertical = createIcon("LineDotBottomVertical", "line-dot-bottom-vertical", {
  nodes: [
    ["path", { d: "M12 3v12" }, { r: "grow", d: 0.1, o: [12, 3] }],
    ["circle", { cx: "12", cy: "18", r: "3" }, { r: "bounce", y: 1, a: 2, o: [12, 18] }],
  ],
});
