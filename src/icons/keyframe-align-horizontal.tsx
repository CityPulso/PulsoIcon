import { createIcon } from "../runtime/createIcon.js";

export const KeyframeAlignHorizontal = createIcon("KeyframeAlignHorizontal", "keyframe-align-horizontal", {
  nodes: [
    ["path", { d: "M11 7A1.414 1.414 0 0 1 13 7L17 11A1.414 1.414 0 0 1 17 13L13 17A1.414 1.414 0 0 1 11 17L7 13A1.414 1.414 0 0 1 7 11Z" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M2 12h2" }, { r: "slide", d: 0.15, x: 1, a: 1, o: [3, 12] }],
    ["path", { d: "M20 12h2" }, { r: "slide", d: 0.15, x: -1, a: 1, o: [21, 12] }],
  ],
});
