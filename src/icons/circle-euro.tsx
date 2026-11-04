import { createIcon } from "../runtime/createIcon.js";

export const CircleEuro = createIcon("CircleEuro", "circle-euro", {
  nodes: [
    ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2" }, { r: "redraw", d: 0.15, o: [11.48, 12] }],
    ["path", { d: "M7 12h5" }, { r: "growX", d: 0.3, o: [7, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
