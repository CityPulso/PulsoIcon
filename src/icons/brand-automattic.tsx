import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "automattic" (CC0-1.0). Automattic is a trademark of its owner.
export const BrandAutomattic = createIcon("BrandAutomattic", "brand-automattic", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "9" }],
    ["path", { d: "M10.5 15 13.5 9" }, { r: "turn", a: 90, o: [12, 12] }],
  ],
});
