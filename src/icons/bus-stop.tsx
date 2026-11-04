import { createIcon } from "../runtime/createIcon.js";

export const BusStop = createIcon("BusStop", "bus-stop", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "10", height: "15", rx: "2" }, { r: "slide", x: 1, a: 1.5, o: [8, 12] }],
    ["path", { d: "M3 10h10" }, { r: "slide", x: 1, a: 1.5, o: [8, 12] }],
    ["path", { d: "M6 14h.01M10 14h.01" }, { r: "slide", x: 1, a: 1.5, o: [8, 12] }],
    ["path", { d: "M5 18v2M11 18v2" }, { r: "slide", x: 1, a: 1.5, o: [8, 12] }],
    ["path", { d: "M18 21V9" }, { r: "fade", o: [18, 15] }],
    ["circle", { cx: "18", cy: "6", r: "3" }, { r: "swing", a: 10, d: 0.1, o: [18, 9] }],
  ],
});
