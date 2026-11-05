import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "car-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CarOff = createIcon("CarOff", "car-off", {
  nodes: [
    ["path", { d: "M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", d: 0, o: [7, 17] }],
    ["path", { d: "M15.584 15.588a2 2 0 0 0 2.828 2.83" }, { r: "spin", d: 0, o: [17, 17] }],
    ["path", { d: "M5 17h-2v-6l2 -5h1m4 0h4l4 5h1a2 2 0 0 1 2 2v4m-6 0h-6m-6 -6h8m4 0h3m-6 -3v-2" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    [
      "path",
      {
        d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
      },
      { r: "slide", d: 0, x: 1, y: 0, a: 1 },
    ],
    ["circle", { cx: "7", cy: "17", r: "2" }, { r: "spin", d: 0, o: [7, 17] }],
    ["circle", { cx: "7", cy: "17", r: "4" }, { r: "spin", d: 0, o: [7, 17] }, "cut"],
    ["path", { d: "M9 17h6", fill: "none" }, { r: "spin", d: 0, o: [17, 17] }],
    ["circle", { cx: "17", cy: "17", r: "2" }, { r: "spin", d: 0, o: [17, 17] }],
    ["circle", { cx: "17", cy: "17", r: "4" }, { r: "spin", d: 0, o: [17, 17] }, "cut"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
