import { icon } from "../icon.js";

export const VibrateOff = icon("VibrateOff", "vibrate-off", {
  nodes: [
    ["path", { d: "m2 8 2 2-2 2 2 2-2 2" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "m22 8-2 2 2 2-2 2 2 2" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34" }, { r: "shake", a: 1, o: [12, 12] }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "m2 8 2 2-2 2 2 2-2 2", fill: "none" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "m22 8-2 2 2 2-2 2 2 2", fill: "none" }, { r: "shake", a: 1, o: [12, 12] }],
    ["rect", { width: "8", height: "14", x: "8", y: "5", rx: "1" }, { r: "shake", a: 1, o: [12, 12] }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
