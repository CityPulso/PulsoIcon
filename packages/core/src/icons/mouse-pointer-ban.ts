import { icon } from "../icon.js";

export const MousePointerBan = icon("MousePointerBan", "mouse-pointer-ban", {
  nodes: [
    [
      "path",
      { d: "M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z" },
      { r: "slide", x: -1, y: -1, a: 1.5, o: [7, 7] },
    ],
    ["circle", { cx: "16", cy: "16", r: "6" }, { r: "spin", d: 0.1, a: 90, o: [16, 16] }],
    ["path", { d: "m11.8 11.8 8.4 8.4" }, { r: "draw", d: 0.15, o: [16, 16] }],
  ],
});
