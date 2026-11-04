import { createIcon } from "../runtime/createIcon.js";

export const FaceCool = createIcon("FaceCool", "face-cool", {
  nodes: [
    ["path", { d: "M5 9h14" }, { r: "drop", y: -1, a: 2, o: [12, 10] }],
    ["path", { d: "M6 9v1a2.5 2.5 0 0 0 5 0V9" }, { r: "drop", y: -1, a: 2, o: [12, 10] }],
    ["path", { d: "M13 9v1a2.5 2.5 0 0 0 5 0V9" }, { r: "drop", y: -1, a: 2, o: [12, 10] }],
    ["path", { d: "M15.5 15a5 5 0 0 1-7 0" }, { r: "draw", d: 0.15, o: [12, 16] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "wobble", a: 5, o: [12, 12] }],
  ],
});
