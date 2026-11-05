import { createIcon } from "../runtime/createIcon.js";

export const ImageOff = createIcon("ImageOff", "image-off", {
  nodes: [
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83" }, { r: "fade", o: [12, 12] }],
    ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21" }, { r: "fade", o: [12, 12] }],
    ["line", { x1: "18", x2: "21", y1: "12", y2: "15" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9" }, { r: "fade", o: [12, 12] }],
  ],
  solid: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }, { r: "fade", o: [12, 12] }],
    ["circle", { cx: "9", cy: "9", r: "2" }, { r: "fade", o: [12, 12] }, "cut"],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }, { r: "fade", o: [12, 12] }, "line"],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
