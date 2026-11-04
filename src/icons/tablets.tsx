import { createIcon } from "../runtime/createIcon.js";

export const Tablets = createIcon("Tablets", "tablets", {
  nodes: [
    ["circle", { cx: "7", cy: "7", r: "5" }, { r: "spin", a: 180, o: [7, 7] }],
    ["circle", { cx: "17", cy: "17", r: "5" }, { r: "spin", d: 0.08, a: -180, o: [17, 17] }],
    ["path", { d: "M12 17h10" }, { r: "spin", d: 0.08, a: -180, o: [17, 17] }],
    ["path", { d: "m3.46 10.54 7.08-7.08" }, { r: "spin", a: 180, o: [7, 7] }],
  ],
});
