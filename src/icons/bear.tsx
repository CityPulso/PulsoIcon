import { createIcon } from "../runtime/createIcon.js";

export const Bear = createIcon("Bear", "bear", {
  nodes: [
    ["path", { d: "M5.43 8.43A2.5 2.5 0 1 1 8.49 5.81a8 8 0 0 1 7.02 0 2.5 2.5 0 1 1 3.06 2.62A8 8 0 1 1 5.43 8.43Z" }, { r: "wobble", a: 5, o: [12, 20] }],
    ["path", { d: "M9 11.5v.5" }, { r: "blink", d: 0.15, o: [12, 11.75] }],
    ["path", { d: "M15 11.5v.5" }, { r: "blink", d: 0.15, o: [12, 11.75] }],
    ["ellipse", { cx: "12", cy: "16.5", rx: "3", ry: "2.5" }, { r: "wobble", a: 5, o: [12, 20] }],
    ["path", { d: "M11.25 15.5h1.5L12 16.25z" }, { r: "pop", d: 0.25, o: [12, 15.88] }],
  ],
});
