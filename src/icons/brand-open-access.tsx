import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "openaccess" (CC0-1.0). Open Access is a trademark of its owner.
export const BrandOpenAccess = createIcon("BrandOpenAccess", "brand-open-access", {
  nodes: [
    ["circle", { cx: "12", cy: "16", r: "5.5" }, { r: "press", a: 0.05, o: [12, 16] }],
    ["circle", { cx: "12", cy: "16", r: "1.5" }],
    ["path", { d: "M8 12V7a4 4 0 0 1 8 0v1.5" }, { r: "lift", y: -1, a: 0, o: [12, 7] }],
  ],
});
