import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "hibob" (CC0-1.0). Hi Bob is a trademark of its owner.

export const BrandHiBob = createIcon("BrandHiBob", "brand-hi-bob", {
  nodes: [
    ["path", { d: "M2.5 7v7.5" }, { r: "draw" }],
    ["circle", { cx: "5.5", cy: "14.5", r: "3" }, { r: "draw", d: 0.1 }],
    ["circle", { cx: "12", cy: "14.5", r: "3" }, { r: "pop", d: 0.25, o: [12, 14.5] }],
    ["path", { d: "M15.5 7v7.5" }, { r: "draw", d: 0.35 }],
    ["circle", { cx: "18.5", cy: "14.5", r: "3" }, { r: "draw", d: 0.45 }],
  ],
});
