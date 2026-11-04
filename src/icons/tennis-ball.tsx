import { createIcon } from "../runtime/createIcon.js";

export const TennisBall = createIcon("TennisBall", "tennis-ball", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "roll", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M6 4c3.5 4 3.5 12 0 16" }, { r: "roll", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M18 4c-3.5 4-3.5 12 0 16" }, { r: "roll", x: 1, a: 1.5, o: [12, 12] }],
  ],
});
