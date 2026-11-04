import { createIcon } from "../runtime/createIcon.js";

export const CreativeCommons = createIcon("CreativeCommons", "creative-commons", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: -90, o: [12, 12] }],
    ["path", { d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" }, { r: "draw", d: 0.1, o: [7.996, 12.014] }],
    ["path", { d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" }, { r: "draw", d: 0.2, o: [14.996, 12.014] }],
  ],
});
