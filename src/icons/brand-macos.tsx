import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "macos" (CC0-1.0). macOS is a trademark of its owner.
export const BrandMacos = createIcon("BrandMacos", "brand-macos", {
  nodes: [
    ["ellipse", { cx: "7.5", cy: "12", rx: "4.5", ry: "6" }, { r: "flip", o: [7.5, 12] }],
    ["path", { d: "M20.5 8c-.5-1.3-1.6-2-3-2-1.7 0-3 1-3 2.6 0 3.8 6.2 2.6 6.2 6.6 0 1.7-1.3 2.8-3.2 2.8-1.5 0-2.7-.7-3.2-2" }, { r: "draw", d: 0.1 }],
  ],
});
