import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "bambulab" (CC0-1.0). Bambu Lab is a trademark of its owner.
export const BrandBambuLab = createIcon("BrandBambuLab", "brand-bambu-lab", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
    ["path", { d: "M11 3v18" }, { r: "draw" }],
    ["path", { d: "M11 12.5l10 2.5" }, { r: "draw", d: 0.2 }],
  ],
});
