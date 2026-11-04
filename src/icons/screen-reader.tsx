import { createIcon } from "../runtime/createIcon.js";

export const ScreenReader = createIcon("ScreenReader", "screen-reader", {
  nodes: [
    ["rect", { x: "2", y: "4", width: "13", height: "11", rx: "2" }, { r: "press", a: 0.04, o: [8.5, 9.5] }],
    ["path", { d: "M8.5 15v4" }, { r: "press", a: 0.04, o: [8.5, 9.5] }],
    ["path", { d: "M5.5 19h6" }, { r: "press", a: 0.04, o: [8.5, 9.5] }],
    ["path", { d: "M5 8h7" }, { r: "growX", o: [5, 8] }],
    ["path", { d: "M5 11h4" }, { r: "growX", d: 0.1, o: [5, 11] }],
    ["path", { d: "M18 7.5a3.5 3.5 0 0 1 0 4" }, { r: "draw", d: 0.15, o: [18.5, 9.5] }],
    ["path", { d: "M20.5 5a7 7 0 0 1 0 9" }, { r: "draw", d: 0.25, o: [21, 9.5] }],
  ],
});
