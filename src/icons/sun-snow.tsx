import { createIcon } from "../runtime/createIcon.js";

export const SunSnow = createIcon("SunSnow", "sun-snow", {
  nodes: [
    ["path", { d: "M10 21v-1" }, { r: "twinkle", d: 0.05, o: [10, 20.5] }],
    ["path", { d: "M10 4V3" }, { r: "twinkle", d: 0.09, o: [10, 3.5] }],
    ["path", { d: "M10 9a3 3 0 0 0 0 6" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "m14 20 1.25-2.5L18 18" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "m14 4 1.25 2.5L18 6" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "m17 21-3-6 1.5-3H22" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "m17 3-3 6 1.5 3" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "M2 12h1" }, { r: "twinkle", d: 0.13, o: [2.5, 12] }],
    ["path", { d: "m20 10-1.5 2 1.5 2" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "m3.64 18.36.7-.7" }, { r: "twinkle", d: 0.17, o: [3.99, 18.01] }],
    ["path", { d: "m4.34 6.34-.7-.7" }, { r: "twinkle", d: 0.21, o: [3.99, 5.99] }],
  ],
});
