import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "turbo" (CC0-1.0). Turbo is a trademark of its owner.
export const BrandTurbo = createIcon("BrandTurbo", "brand-turbo", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "4" }],
    ["circle", { cx: "12", cy: "12", r: "6.5" }, { r: "press", a: 0.05, o: [12, 12] }],
    [
      "path",
      { d: "M13.8 12L15.52 14.47M12.9 13.56L11.63 16.28M11.1 13.56L8.1 13.82M10.2 12L8.48 9.53M11.1 10.44L12.37 7.72M12.9 10.44L15.9 10.18" },
      { r: "spin", a: 360, o: [12, 12] },
    ],
  ],
});
