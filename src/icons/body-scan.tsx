import { createIcon } from "../runtime/createIcon.js";

export const BodyScan = createIcon("BodyScan", "body-scan", {
  nodes: [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }, { r: "slide", x: -1, y: -1, a: 1.5, o: [5, 5] }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [19, 5] }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }, { r: "slide", x: 1, y: 1, a: 1.5, o: [19, 19] }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [5, 19] }],
    ["circle", { cx: "12", cy: "7", r: "1" }, { r: "pulse", d: 0.1, a: 0.1, o: [12, 12] }],
    ["path", { d: "m8 10.5 4 1 4-1" }, { r: "pulse", d: 0.1, a: 0.1, o: [12, 12] }],
    ["path", { d: "M12 11.5v3" }, { r: "pulse", d: 0.1, a: 0.1, o: [12, 12] }],
    ["path", { d: "m9.5 18 2.5-3.5 2.5 3.5" }, { r: "pulse", d: 0.1, a: 0.1, o: [12, 12] }],
  ],
});
