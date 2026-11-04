import { createIcon } from "../runtime/createIcon.js";

export const RingDiamond = createIcon("RingDiamond", "ring-diamond", {
  nodes: [
    ["circle", { cx: "12", cy: "15.5", r: "5.5" }, { r: "wobble", a: 4, o: [12, 15.5] }],
    ["path", { d: "M10 3h4l2 3-4 4-4-4z" }, { r: "twinkle", d: 0.1, a: 12, o: [12, 6.5] }],
    ["path", { d: "M8 6h8" }, { r: "twinkle", d: 0.1, a: 12, o: [12, 6.5] }],
  ],
});
