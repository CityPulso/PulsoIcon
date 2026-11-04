import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "lens" (CC0-1.0). Lens is a trademark of its owner.

export const BrandLens = createIcon("BrandLens", "brand-lens", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.03, o: [12, 12] }],
    [
      "path",
      { d: "M13.8 8.88L18.28 16.63M10.2 8.88L19.15 8.88M8.4 12L12.87 4.25M10.2 15.12L5.72 7.37M13.8 15.12L4.85 15.12M15.6 12L11.13 19.75" },
      { r: "spin", a: 60, o: [12, 12] },
    ],
  ],
});
