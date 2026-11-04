import { createIcon } from "../runtime/createIcon.js";

export const Group = createIcon("Group", "group", {
  nodes: [
    ["path", { d: "M3 7V5c0-1.1.9-2 2-2h2" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M17 3h2c1.1 0 2 .9 2 2v2" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M21 17v2c0 1.1-.9 2-2 2h-2" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M7 21H5c-1.1 0-2-.9-2-2v-2" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["rect", { width: "7", height: "5", x: "7", y: "7", rx: "1" }, { r: "slide", x: -1, y: -1, a: 1, o: [10.5, 9.5] }],
    ["rect", { width: "7", height: "5", x: "10", y: "12", rx: "1" }, { r: "slide", x: 1, y: 1, a: 1, o: [13.5, 14.5] }],
  ],
});
