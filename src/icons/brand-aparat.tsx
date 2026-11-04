import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "aparat" (CC0-1.0). Aparat is a trademark of its owner.
export const BrandAparat = createIcon("BrandAparat", "brand-aparat", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "8" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "9.35", cy: "9.35", r: "1.25" }, { r: "spin", o: [12, 12] }],
    ["circle", { cx: "14.65", cy: "9.35", r: "1.25" }, { r: "spin", o: [12, 12] }],
    ["circle", { cx: "14.65", cy: "14.65", r: "1.25" }, { r: "spin", o: [12, 12] }],
    ["circle", { cx: "9.35", cy: "14.65", r: "1.25" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M12 12h.01" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M3.2 8.2a3 3 0 0 1 4.9-5" }],
    ["path", { d: "M15.9 3.2a3 3 0 0 1 4.9 5" }],
    ["path", { d: "M20.8 15.8a3 3 0 0 1-4.9 5" }],
    ["path", { d: "M8.1 20.8a3 3 0 0 1-4.9-5" }],
  ],
});
