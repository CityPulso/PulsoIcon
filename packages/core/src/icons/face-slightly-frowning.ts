import { icon } from "../icon.js";

export const FaceSlightlyFrowning = icon("FaceSlightlyFrowning", "face-slightly-frowning", {
  nodes: [
    ["path", { d: "M15 10V9" }, { r: "blink", d: 0.05, o: [12, 9.5] }],
    ["path", { d: "M9 10V9" }, { r: "blink", d: 0.05, o: [12, 9.5] }],
    ["path", { d: "M9 16a5 5 0 016 0" }, { r: "fold", d: 0.15, o: [12, 15.5] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
