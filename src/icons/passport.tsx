import { createIcon } from "../runtime/createIcon.js";

export const Passport = createIcon("Passport", "passport", {
  nodes: [
    ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }, { r: "open", o: [4, 12] }],
    ["circle", { cx: "12", cy: "10", r: "3" }, { r: "spin", d: 0.15, a: 360, o: [12, 10] }],
    ["path", { d: "M9 10h6" }, { r: "spin", d: 0.15, a: 360, o: [12, 10] }],
    ["path", { d: "M9 17h6" }, { r: "growX", d: 0.25, o: [9, 17] }],
  ],
});
