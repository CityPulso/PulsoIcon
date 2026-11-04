import { createIcon } from "../runtime/createIcon.js";

export const Image = createIcon("Image", "image", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "9", cy: "9", r: "2" }, { r: "rise", d: 0.05, a: 3, o: [9, 9] }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }, { r: "draw", d: 0.15, o: [13.5, 16.164] }],
  ],
});
