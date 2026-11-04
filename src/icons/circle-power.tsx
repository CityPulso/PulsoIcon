import { createIcon } from "../runtime/createIcon.js";

export const CirclePower = createIcon("CirclePower", "circle-power", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 7v4" }, { r: "grow", d: 0.2, o: [12, 11] }],
    ["path", { d: "M7.998 9.003a5 5 0 1 0 8-.005" }, { r: "redraw", o: [12, 12.999] }],
  ],
});
