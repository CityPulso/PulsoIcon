import { createIcon } from "../runtime/createIcon.js";

export const CircleMinus = createIcon("CircleMinus", "circle-minus", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "M8 12h8" }, { r: "growX", d: 0.1, o: [12, 12] }],
  ],
});
