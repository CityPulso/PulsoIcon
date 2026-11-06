import { icon } from "../icon.js";

export const TabletSmartphone = icon("TabletSmartphone", "tablet-smartphone", {
  nodes: [
    ["rect", { width: "10", height: "14", x: "3", y: "8", rx: "2" }, { r: "slide", d: 0.05, x: -1, a: 1.5, o: [8, 15] }],
    ["path", { d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" }, { r: "press", a: 0.04, o: [13, 12] }],
    ["path", { d: "M8 18h.01" }, { r: "slide", d: 0.05, x: -1, a: 1.5, o: [8, 15] }],
  ],
});
