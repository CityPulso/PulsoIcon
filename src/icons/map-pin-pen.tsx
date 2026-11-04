import { createIcon } from "../runtime/createIcon.js";

export const MapPinPen = createIcon("MapPinPen", "map-pin-pen", {
  nodes: [
    ["path", { d: "M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468" }, { r: "bounce", y: -1, a: 2, o: [9.985, 11.732] }],
    [
      "path",
      { d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" },
      { r: "tilt", d: 0.1, a: 14, o: [14, 21] },
    ],
    ["circle", { cx: "10", cy: "10", r: "3" }, { r: "bounce", y: -1, a: 2, o: [9.985, 11.732] }],
  ],
});
