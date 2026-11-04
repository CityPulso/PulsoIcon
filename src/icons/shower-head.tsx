import { createIcon } from "../runtime/createIcon.js";

export const ShowerHead = createIcon("ShowerHead", "shower-head", {
  nodes: [
    ["path", { d: "m4 4 2.5 2.5" }, { r: "press", a: 0.06, o: [4, 4] }],
    ["path", { d: "M13.5 6.5a4.95 4.95 0 0 0-7 7" }, { r: "press", a: 0.06, o: [4, 4] }],
    ["path", { d: "M15 5 5 15" }, { r: "press", a: 0.06, o: [4, 4] }],
    ["path", { d: "M14 17v.01" }, { r: "drop", d: 0.09, x: 0.7, y: 0.7, a: -2, o: [14, 17.005] }],
    ["path", { d: "M10 16v.01" }, { r: "drop", d: 0.05, x: 0.7, y: 0.7, a: -2, o: [10, 16.005] }],
    ["path", { d: "M13 13v.01" }, { r: "drop", d: 0.13, x: 0.7, y: 0.7, a: -2, o: [13, 13.005] }],
    ["path", { d: "M16 10v.01" }, { r: "drop", d: 0.25, x: 0.7, y: 0.7, a: -2, o: [16, 10.005] }],
    ["path", { d: "M11 20v.01" }, { r: "drop", d: 0.17, x: 0.7, y: 0.7, a: -2, o: [11, 20.005] }],
    ["path", { d: "M17 14v.01" }, { r: "drop", d: 0.21, x: 0.7, y: 0.7, a: -2, o: [17, 14.005] }],
    ["path", { d: "M20 11v.01" }, { r: "drop", d: 0.29, x: 0.7, y: 0.7, a: -2, o: [20, 11.005] }],
  ],
});
