import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "stryker" (CC0-1.0). Stryker is a trademark of its owner.
export const BrandStryker = createIcon("BrandStryker", "brand-stryker", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "8" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M15 8.5c-.6-1-1.6-1.5-2.8-1.5-1.5 0-2.7.9-2.7 2.2 0 3 5.6 1.6 5.6 4.6 0 1.3-1.2 2.2-2.8 2.2-1.3 0-2.4-.6-3-1.6" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2" }, { r: "pulse", d: 0.2, o: [12, 12] }],
  ],
});
