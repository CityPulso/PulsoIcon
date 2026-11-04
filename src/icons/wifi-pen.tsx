import { createIcon } from "../runtime/createIcon.js";

export const WifiPen = createIcon("WifiPen", "wifi-pen", {
  nodes: [
    ["path", { d: "M2 8.82a15 15 0 0 1 20 0" }, { r: "draw", d: 0.16, o: [12, 6.91] }],
    [
      "path",
      { d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" },
      { r: "tilt", d: 0.1, a: 14, o: [14, 21] },
    ],
    ["path", { d: "M5 12.859a10 10 0 0 1 10.5-2.222" }, { r: "draw", d: 0.08, o: [10.25, 11.431] }],
    ["path", { d: "M8.5 16.429a5 5 0 0 1 3-1.406" }, { r: "draw", o: [10, 15.726] }],
  ],
});
