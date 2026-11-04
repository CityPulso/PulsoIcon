import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "dcentertainment" (CC0-1.0). DC Entertainment is a trademark of its owner.
export const BrandDcEntertainment = createIcon("BrandDcEntertainment", "brand-dc-entertainment", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M6 8v8h1a3.5 4 0 0 0 0-8z" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M17.4 8.9a3 4 0 1 0 0 6.2" }, { r: "draw", d: 0.25 }],
  ],
});
