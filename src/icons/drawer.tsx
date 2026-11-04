import { createIcon } from "../runtime/createIcon.js";

export const Drawer = createIcon("Drawer", "drawer", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "16", rx: "2" }, { r: "press", a: 0.04, o: [12, 11] }],
    ["path", { d: "M3 11h18" }, { r: "press", a: 0.04, o: [12, 11] }],
    ["path", { d: "M10 7h4" }, { r: "slide", y: 1, a: 1, o: [12, 7] }],
    ["path", { d: "M10 15h4" }, { r: "slide", y: 1, a: 1, d: 0.1, o: [12, 15] }],
    ["path", { d: "M5 19v2M19 19v2" }, { r: "press", a: 0.04, o: [12, 11] }],
  ],
});
