import { createIcon } from "../runtime/createIcon.js";

export const Hotdog = createIcon("Hotdog", "hotdog", {
  nodes: [
    ["rect", { x: "2", y: "6", width: "20", height: "6", rx: "3" }, { r: "wobble", a: 4, o: [12, 9] }],
    ["path", { d: "M6 9c1-1 1.5-1 2.5 0s1.5 1 2.5 0 1.5-1 2.5 0 1.5 1 2.5 0 1.5-1 2-.5" }, { r: "draw", d: 0.15, o: [12, 9] }],
    ["path", { d: "M3 12.5a6 6 0 0 0 6 5.5h6a6 6 0 0 0 6-5.5" }, { r: "press", a: 0.05, o: [12, 18] }],
  ],
});
