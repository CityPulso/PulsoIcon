import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "komoot" (CC0-1.0). Komoot is a trademark of its owner.
export const BrandKomoot = createIcon("BrandKomoot", "brand-komoot", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M5.5 19.5 12 13l6.5 6.5" }, { r: "rise", d: 0.05, y: -1, a: 1.5 }],
  ],
});
