import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "mtr" (CC0-1.0). MTR is a trademark of its owner.
export const BrandMtr = createIcon("BrandMtr", "brand-mtr", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 3v18" }, { r: "draw" }],
    ["path", { d: "M7 7c3 2 7 2 10 0" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M7 17c3-2 7-2 10 0" }, { r: "draw", d: 0.2 }],
  ],
});
