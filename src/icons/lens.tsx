import { createIcon } from "../runtime/createIcon.js";

export const Lens = createIcon("Lens", "lens", {
  nodes: [
    ["path", { d: "M15.725 7.296h.01" }, { r: "twinkle", d: 0.25, o: [15.73, 7.296] }],
    ["path", { d: "M6 12a6 6 0 016-6" }, { r: "draw", d: 0.1, o: [9, 9] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
