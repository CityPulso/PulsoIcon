import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "cncf" (CC0-1.0). CNCF is a trademark of its owner.
export const BrandCncf = createIcon("BrandCncf", "brand-cncf", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18" }],
    ["path", { d: "M7 7h4l6 6v4h-4l-6-6z" }, { r: "draw", o: [12, 12] }],
  ],
});
