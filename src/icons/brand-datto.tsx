import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "datto" (CC0-1.0). Datto is a trademark of its owner.
export const BrandDatto = createIcon("BrandDatto", "brand-datto", {
  nodes: [
    ["circle", { cx: "3.5", cy: "14.5", r: "1.75" }, { r: "draw" }],
    ["path", { d: "M5.25 9.5v6.75" }, { r: "draw", d: 0.05 }],
    ["circle", { cx: "9", cy: "14.5", r: "1.75" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M10.75 12.75v3.5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M13.25 10v6M13.25 12.5h1.5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M16.5 10v6M16.5 12.5h1.5" }, { r: "draw", d: 0.25 }],
    ["circle", { cx: "20", cy: "14.5", r: "1.75" }, { r: "draw", d: 0.3 }],
  ],
});
