import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "cylinder-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CylinderOff = createIcon("CylinderOff", "cylinder-off", {
  nodes: [
    [
      "path",
      {
        d: "M5.23 5.233c-.15 .245 -.23 .502 -.23 .767c0 1.131 1.461 2.117 3.62 2.628m4.357 .343c3.404 -.204 6.023 -1.456 6.023 -2.971c0 -1.657 -3.134 -3 -7 -3c-1.645 0 -3.158 .243 -4.353 .65",
      },
      { r: "jelly", o: [12, 21] },
    ],
    ["path", { d: "M5 6v12c0 1.657 3.134 3 7 3c3.245 0 5.974 -.946 6.767 -2.23m.233 -3.77v-9" }, { r: "jelly", o: [12, 21] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }, { r: "jelly", o: [12, 21] }],
    ["path", { d: "M3 5v14a9 3 0 0 0 18 0V5", fill: "none" }, { r: "jelly", o: [12, 21] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
