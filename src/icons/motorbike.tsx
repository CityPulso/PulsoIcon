import { createIcon } from "../runtime/createIcon.js";

export const Motorbike = createIcon("Motorbike", "motorbike", {
  nodes: [
    ["path", { d: "m18 14-1-3" }, { r: "slide", x: 1, a: 1, o: [11, 11] }],
    ["path", { d: "m3 9 6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 1.99 1.81" }, { r: "slide", x: 1, a: 1, o: [11, 11] }],
    ["path", { d: "M8 17h3a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 0 0 1-1v-.75A5 5 0 0 0 17 5" }, { r: "slide", x: 1, a: 1, o: [11, 11] }],
    ["circle", { cx: "19", cy: "17", r: "3" }, { r: "spin", a: 360, o: [19, 17] }],
    ["circle", { cx: "5", cy: "17", r: "3" }, { r: "spin", a: 360, o: [5, 17] }],
  ],
});
