import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "fontforge" (CC0-1.0). FontForge is a trademark of its owner.
export const BrandFontforge = createIcon("BrandFontforge", "brand-fontforge", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M7 18c1.2.3 2-.5 2.3-2l1.6-7.5c.3-1.5 1.3-2.2 2.6-1.8" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M10.5 18c1.2.3 2-.5 2.3-2l1.6-7.5c.3-1.5 1.3-2.2 2.6-1.8" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M8.5 11h8" }, { r: "growX", d: 0.3, o: [8.5, 11] }],
  ],
});
