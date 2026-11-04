import { createIcon } from "../runtime/createIcon.js";

export const EllipsisVertical = createIcon("EllipsisVertical", "ellipsis-vertical", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "1" }, { r: "bounce", d: 0.08, x: 1, a: 1.5, o: [12, 12] }],
    ["circle", { cx: "12", cy: "5", r: "1" }, { r: "bounce", x: 1, a: 1.5, o: [12, 5] }],
    ["circle", { cx: "12", cy: "19", r: "1" }, { r: "bounce", d: 0.16, x: 1, a: 1.5, o: [12, 19] }],
  ],
});
