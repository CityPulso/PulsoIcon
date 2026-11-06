import { icon } from "../icon.js";

export const FaceWink = icon("FaceWink", "face-wink", {
  nodes: [
    ["path", { d: "M14 10a1.5 1.5 0 0 1 2.5 0" }, { r: "blink", d: 0.05, o: [15.25, 9.5] }],
    ["path", { d: "M16.472 15a6 6 0 01-8.943 0" }, { r: "draw", d: 0.12, o: [12.001, 16] }],
    ["path", { d: "M9 10V9" }, { r: "blink", d: 0.05, o: [12, 9.5] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "wobble", a: 6, o: [12, 12] }],
  ],
});
