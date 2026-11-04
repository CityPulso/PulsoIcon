import { createIcon } from "../runtime/createIcon.js";

export const Generator = createIcon("Generator", "generator", {
  nodes: [
    ["rect", { x: "2", y: "6", width: "20", height: "13", rx: "2" }, { r: "shake", a: 0.4, o: [12, 12.5] }],
    ["path", { d: "M7 6V4h10v2" }, { r: "shake", a: 0.4, o: [12, 12.5] }],
    ["path", { d: "m13 9-3 4h4l-3 4" }, { r: "flicker", d: 0.1, o: [12, 13] }],
    ["path", { d: "M6 19v2M18 19v2" }, { r: "shake", a: 0.4, o: [12, 12.5] }],
  ],
});
