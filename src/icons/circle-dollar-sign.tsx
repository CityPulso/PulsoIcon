import { createIcon } from "../runtime/createIcon.js";

export const CircleDollarSign = createIcon("CircleDollarSign", "circle-dollar-sign", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }, { r: "redraw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M12 18V6" }, { r: "grow", d: 0.2, o: [12, 12] }],
  ],
});
