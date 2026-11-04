import { createIcon } from "../runtime/createIcon.js";

export const FaceLaughing = createIcon("FaceLaughing", "face-laughing", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "jelly", a: 0.06, o: [12, 12] }],
    ["path", { d: "M7.5 10c.5-1 2.5-1 3 0" }, { r: "bounce", y: -1, a: 1, o: [9, 9.6] }],
    ["path", { d: "M13.5 10c.5-1 2.5-1 3 0" }, { r: "bounce", y: -1, a: 1, o: [15, 9.6] }],
    ["path", { d: "M8 14h8a4 4 0 0 1-8 0z" }, { r: "press", d: 0.1, a: 0.2, o: [12, 15] }],
  ],
});
