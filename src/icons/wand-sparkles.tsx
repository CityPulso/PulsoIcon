import { createIcon } from "../runtime/createIcon.js";

export const WandSparkles = createIcon("WandSparkles", "wand-sparkles", {
  nodes: [
    [
      "path",
      { d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" },
      { r: "tilt", a: 10, o: [3, 21] },
    ],
    ["path", { d: "m14 7 3 3" }, { r: "tilt", a: 10, o: [3, 21] }],
    ["path", { d: "M5 6v4" }, { r: "twinkle", d: 0.1, o: [5, 8] }],
    ["path", { d: "M19 14v4" }, { r: "twinkle", d: 0.14, o: [19, 16] }],
    ["path", { d: "M10 2v2" }, { r: "twinkle", d: 0.18, o: [10, 3] }],
    ["path", { d: "M7 8H3" }, { r: "twinkle", d: 0.22, o: [5, 8] }],
    ["path", { d: "M21 16h-4" }, { r: "twinkle", d: 0.26, o: [19, 16] }],
    ["path", { d: "M11 3H9" }, { r: "twinkle", d: 0.3, o: [10, 3] }],
  ],
});
