import { createIcon } from "../runtime/createIcon.js";

export const LifeBuoy = createIcon("LifeBuoy", "life-buoy", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "m4.93 4.93 4.24 4.24" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "m14.83 9.17 4.24-4.24" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "m14.83 14.83 4.24 4.24" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "m9.17 14.83-4.24 4.24" }, { r: "spin", a: 180, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "4" }, { r: "spin", a: 180, o: [12, 12] }],
  ],
});
