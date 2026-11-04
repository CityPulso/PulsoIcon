import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "rakutenkobo" (CC0-1.0). Rakuten Kobo is a trademark of its owner.
export const BrandRakutenKobo = createIcon("BrandRakutenKobo", "brand-rakuten-kobo", {
  nodes: [
    ["path", { d: "M2.5 7.5V17M5.5 12.5l-3 2.5 3 2" }, { r: "draw" }],
    ["circle", { cx: "9", cy: "15", r: "2" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M13 7.5V17M13 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }, { r: "draw", d: 0.2 }],
    ["circle", { cx: "20", cy: "15", r: "2" }, { r: "draw", d: 0.3 }],
  ],
});
