import { createIcon } from "../runtime/createIcon.js";

export const FaceSlightlySmilingPlus = createIcon("FaceSlightlySmilingPlus", "face-slightly-smiling-plus", {
  nodes: [
    ["path", { d: "M13.267 2.08a10 10 0 108.653 8.653" }, { r: "wobble", a: 5, o: [12.001, 11.999] }],
    ["path", { d: "M15 10V9" }, { r: "blink", d: 0.05, o: [12, 9.5] }],
    ["path", { d: "M16 5h6" }, { r: "spin", d: 0.2, a: 90, o: [19, 5] }],
    ["path", { d: "M16.472 15a6 6 0 01-8.943 0" }, { r: "draw", d: 0.12, o: [12.001, 16] }],
    ["path", { d: "M19 2v6" }, { r: "spin", d: 0.2, a: 90, o: [19, 5] }],
    ["path", { d: "M9 10V9" }, { r: "blink", d: 0.05, o: [12, 9.5] }],
  ],
});
