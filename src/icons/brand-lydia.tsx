import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "lydia" (CC0-1.0). Lydia is a trademark of its owner.
export const BrandLydia = createIcon("BrandLydia", "brand-lydia", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8.5 16.5L12 7.5l3.5 9" }, { r: "draw", d: 0.1 }],
  ],
});
