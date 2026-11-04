import { createIcon } from "../runtime/createIcon.js";

export const Router = createIcon("Router", "router", {
  nodes: [
    ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }, { r: "press", a: 0.04, o: [12, 18] }],
    ["path", { d: "M6.01 18H6" }, { r: "flicker", d: 0.05, o: [8.005, 18] }],
    ["path", { d: "M10.01 18H10" }, { r: "flicker", d: 0.11, o: [8.005, 18] }],
    ["path", { d: "M15 10v4" }, { r: "grow", d: 0.1, o: [15, 14] }],
    ["path", { d: "M17.84 7.17a4 4 0 0 0-5.66 0" }, { r: "draw", d: 0.15, o: [15.01, 6.583] }],
    ["path", { d: "M20.66 4.34a8 8 0 0 0-11.31 0" }, { r: "draw", d: 0.25, o: [15.005, 3.169] }],
  ],
});
