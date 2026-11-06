import { icon } from "../icon.js";

// Adapted from Tabler Icons "pyramid-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PyramidPlus = icon("PyramidPlus", "pyramid-plus", {
  nodes: [
    [
      "path",
      { d: "M18.719 11.985l-5.889 -9.539a.999 .999 0 0 0 -1.664 0l-8.54 13.836a1.005 1.005 0 0 0 .386 1.452l8.092 4.054a1.994 1.994 0 0 0 1.789 0l.149 -.074" },
      { r: "press", d: 0, a: 0.05, o: [12, 20] },
    ],
    ["path", { d: "M12 2v20" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M16 19h6" }, { r: "spin", d: 0.15, a: 180, o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "spin", d: 0.15, a: 180, o: [19, 19] }],
  ],
});
