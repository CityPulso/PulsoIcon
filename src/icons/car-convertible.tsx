import { createIcon } from "../runtime/createIcon.js";

export const CarConvertible = createIcon("CarConvertible", "car-convertible", {
  nodes: [
    ["path", { d: "M5 17H3v-3.2a1.5 1.5 0 0 1 1.2-1.5L10 11h8a3 3 0 0 1 3 3v3h-2" }, { r: "slide", x: 1, a: 1, o: [12, 14] }],
    ["path", { d: "M9 17h6" }, { r: "slide", x: 1, a: 1, o: [12, 14] }],
    ["path", { d: "m10 11 2.5-4" }, { r: "slide", x: 1, a: 1, o: [12, 14] }],
    ["path", { d: "M16 11V9" }, { r: "slide", x: 1, a: 1, o: [12, 14] }],
    ["circle", { cx: "7", cy: "17", r: "2" }, { r: "spin", a: 360, o: [7, 17] }],
    ["circle", { cx: "17", cy: "17", r: "2" }, { r: "spin", a: 360, o: [17, 17] }],
  ],
});
