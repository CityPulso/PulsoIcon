import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "opentofu" (CC0-1.0). OpenTofu is a trademark of its owner.
export const BrandOpentofu = createIcon("BrandOpentofu", "brand-opentofu", {
  svg: { r: "bounce", x: 0, y: -1, a: 1.5 },
  nodes: [
    ["path", { d: "M12 2.5l8.5 4.5v10L12 21.5 3.5 17V7z" }],
    ["path", { d: "M3.5 7 12 11.5 20.5 7M12 11.5v10" }],
    ["path", { d: "M6.5 13.5l1 .5M9 15l1 .5" }, { r: "blink", d: 0.3, o: [8, 14.5] }],
  ],
});
