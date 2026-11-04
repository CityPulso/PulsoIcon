import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "reactos" (CC0-1.0). ReactOS is a trademark of its owner.
export const BrandReactos = createIcon("BrandReactos", "brand-reactos", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "6.5" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "M20.04 18.75A10.5 4 40 1 0 3.96 5.25A10.5 4 40 1 0 20.04 18.75" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M20.04 5.25A10.5 4 -40 1 0 3.96 18.75A10.5 4 -40 1 0 20.04 5.25" }, { r: "spin", a: -180, o: [12, 12] }],
  ],
});
