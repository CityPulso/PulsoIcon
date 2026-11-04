import { createIcon } from "../runtime/createIcon.js";

export const Pan = createIcon("Pan", "pan", {
  nodes: [
    ["circle", { cx: "9", cy: "14", r: "7" }, { r: "tilt", a: 8, o: [20, 4] }],
    ["path", { d: "m14 9 6.5-6.5" }, { r: "tilt", a: 8, o: [20, 4] }],
    ["path", { d: "M6 13a3 3 0 0 1 3-3" }, { r: "fade", d: 0.15, o: [7.5, 11.5] }],
  ],
});
