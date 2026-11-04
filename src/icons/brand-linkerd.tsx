import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "linkerd" (CC0-1.0). Linkerd is a trademark of its owner.

export const BrandLinkerd = createIcon("BrandLinkerd", "brand-linkerd", {
  nodes: [
    ["path", { d: "M3 10l5-5" }, { r: "draw" }],
    ["path", { d: "M3 15l10-10" }, { r: "draw", d: 0.08 }],
    ["path", { d: "M8 15l10-10" }, { r: "draw", d: 0.16 }],
    ["path", { d: "M13 15l8-8" }, { r: "draw", d: 0.24 }],
    ["path", { d: "M4 18v3m5-4v4m5-4v4m5-4v4" }, { r: "grow", d: 0.3, o: [12, 21] }],
  ],
});
