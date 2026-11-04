import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "wikimediacommons" (CC0-1.0). Wikimedia Commons is a trademark of its owner.
export const BrandWikimediaCommons = createIcon("BrandWikimediaCommons", "brand-wikimedia-commons", {
  nodes: [
    ["path", { d: "M10 8.3a6.5 6.5 0 1 0 4 0" }, { r: "draw" }],
    ["circle", { cx: "12", cy: "14.5", r: "2" }, { r: "pulse", o: [12, 14.5] }],
    ["path", { d: "M12 9V3" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M9.5 5.5 12 3l2.5 2.5" }, { r: "pop", d: 0.3, o: [12, 4] }],
  ],
});
