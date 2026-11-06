import { icon } from "../icon.js";

export const BellElectric = icon("BellElectric", "bell-electric", {
  nodes: [
    ["path", { d: "M18.518 17.347A7 7 0 0 1 14 19" }, { r: "shake", d: 0.1, a: 0.6, o: [11.259, 19] }],
    ["path", { d: "M18.8 4A11 11 0 0 1 20 9" }, { r: "ring", a: 10, o: [9, 3] }],
    ["path", { d: "M9 9h.01" }, { r: "ring", a: 10, o: [9, 3] }],
    ["circle", { cx: "20", cy: "16", r: "2" }, { r: "pulse", d: 0.05, a: 0.15, o: [20, 16] }],
    ["circle", { cx: "9", cy: "9", r: "7" }, { r: "ring", a: 10, o: [9, 3] }],
    ["rect", { x: "4", y: "16", width: "10", height: "6", rx: "2" }, { r: "shake", d: 0.1, a: 0.6, o: [11.259, 19] }],
  ],
});
