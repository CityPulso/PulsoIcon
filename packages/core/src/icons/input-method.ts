import { icon } from "../icon.js";

export const InputMethod = icon("InputMethod", "input-method", {
  nodes: [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m6 16 3-8 3 8" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M7.1 13.5h3.8" }, { r: "draw", d: 0.25 }],
    ["path", { d: "m15 11 2.5 2.5L20 11" }, { r: "bounce", d: 0.1, y: 1, a: 1, o: [17.5, 12] }],
  ],
});
