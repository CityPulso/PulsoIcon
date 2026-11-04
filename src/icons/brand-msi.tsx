import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "msi" (CC0-1.0). MSI is a trademark of its owner.
export const BrandMsi = createIcon("BrandMsi", "brand-msi", {
  nodes: [
    ["path", { d: "M15 6c-5 0-8.5 2-8.5 5s3 4.5 6.5 4.5 5 1 5 3-2 3-5 3c-2 0-4-.8-5-2" }, { r: "draw" }],
    ["path", { d: "M15 6l1-2.5 1.5 1.5L21 4l-2 3.5-4-1.5" }, { r: "wobble", d: 0.1, o: [17, 5] }],
    ["path", { d: "M9 8.5 6.5 6M10 15l-3 2" }, { r: "draw", d: 0.2 }],
  ],
});
