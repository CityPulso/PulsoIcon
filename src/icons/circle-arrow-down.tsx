import { createIcon } from "../runtime/createIcon.js";

export const CircleArrowDown = createIcon("CircleArrowDown", "circle-arrow-down", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M12 8v8" }, { r: "bounce", d: 0.1, y: 1, a: 2, o: [12, 12] }],
    ["path", { d: "m8 12 4 4 4-4" }, { r: "bounce", d: 0.1, y: 1, a: 2, o: [12, 12] }],
  ],
});
