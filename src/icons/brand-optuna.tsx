import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "optuna" (CC0-1.0). Optuna is a trademark of its owner.
export const BrandOptuna = createIcon("BrandOptuna", "brand-optuna", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12.5", cy: "12", r: "6" }, { r: "pulse", a: 0.1, d: 0.08, o: [12.5, 12] }],
    ["circle", { cx: "13", cy: "12", r: "2" }, { r: "pop", d: 0.16, o: [13, 12] }],
  ],
});
