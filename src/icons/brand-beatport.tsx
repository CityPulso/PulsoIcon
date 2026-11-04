import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "beatport" (CC0-1.0). Beatport is a trademark of its owner.
export const BrandBeatport = createIcon("BrandBeatport", "brand-beatport", {
  nodes: [
    ["path", { d: "M9 2v7a3 3 0 0 1-.9 2.1L5 14.2" }],
    ["circle", { cx: "14.5", cy: "15", r: "5" }, { r: "beat", o: [14.5, 15] }],
  ],
});
