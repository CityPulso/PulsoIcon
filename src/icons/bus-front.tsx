import { createIcon } from "../runtime/createIcon.js";

export const BusFront = createIcon("BusFront", "bus-front", {
  nodes: [
    ["path", { d: "M4 6 2 7" }, { r: "fade", d: 0.15, o: [12, 13.5] }],
    ["path", { d: "M10 6h4" }, { r: "fade", d: 0.15, o: [12, 13.5] }],
    ["path", { d: "m22 7-2-1" }, { r: "fade", d: 0.15, o: [12, 13.5] }],
    ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 19] }],
    ["path", { d: "M4 11h16" }, { r: "fade", d: 0.15, o: [12, 13.5] }],
    ["path", { d: "M8 15h.01" }, { r: "pop", d: 0.1, o: [8.005, 15] }],
    ["path", { d: "M16 15h.01" }, { r: "pop", d: 0.1, o: [16.005, 15] }],
    ["path", { d: "M6 19v2" }, { r: "fade", d: 0.15, o: [12, 13.5] }],
    ["path", { d: "M18 21v-2" }, { r: "fade", d: 0.15, o: [12, 13.5] }],
  ],
});
