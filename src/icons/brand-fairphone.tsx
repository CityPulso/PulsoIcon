import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "fairphone" (CC0-1.0). Fairphone is a trademark of its owner.
export const BrandFairphone = createIcon("BrandFairphone", "brand-fairphone", {
  nodes: [
    ["path", { d: "M5.5 8H2v8" }, { r: "draw", o: [3.5, 12] }],
    ["path", { d: "M2 12h3" }, { r: "draw", d: 0.06, o: [3.5, 12] }],
    ["path", { d: "M7 16l2.25-8 2.25 8" }, { r: "draw", d: 0.12, o: [9.25, 12] }],
    ["path", { d: "M7.75 13.5h3" }, { r: "draw", d: 0.18, o: [9.25, 13.5] }],
    ["path", { d: "M14 8v8" }, { r: "draw", d: 0.24, o: [14, 12] }],
    ["path", { d: "M17 16V8h2a2.25 2.25 0 0 1 0 4.5h-2l3.5 3.5" }, { r: "draw", d: 0.3, o: [19, 12] }],
  ],
});
