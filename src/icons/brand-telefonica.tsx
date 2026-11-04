import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "telefonica" (CC0-1.0). Telefónica is a trademark of its owner.

export const BrandTelefonica = createIcon("BrandTelefonica", "brand-telefonica", {
  nodes: [
    ["circle", { cx: "5", cy: "5", r: "2" }, { r: "pop", o: [5, 5] }],
    ["circle", { cx: "12", cy: "5", r: "2" }, { r: "pop", d: 0.06, o: [12, 5] }],
    ["circle", { cx: "19", cy: "5", r: "2" }, { r: "pop", d: 0.12, o: [19, 5] }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "pop", d: 0.18, o: [12, 12] }],
    ["circle", { cx: "12", cy: "19", r: "2" }, { r: "pop", d: 0.24, o: [12, 19] }],
  ],
});
