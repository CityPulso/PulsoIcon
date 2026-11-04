import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "wikimediafoundation" (CC0-1.0). Wikimedia Foundation is a trademark of its owner.
export const BrandWikimediaFoundation = createIcon("BrandWikimediaFoundation", "brand-wikimedia-foundation", {
  nodes: [
    ["circle", { cx: "12", cy: "5", r: "2.5" }, { r: "bounce", y: -1, o: [12, 5] }],
    ["path", { d: "M6.5 6.5a8 8 0 1 0 11 0" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M9 10a4 4 0 0 0 6 0" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M12 10.5V20" }, { r: "grow", d: 0.25, o: [12, 20] }],
  ],
});
