import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "adaway" (CC0-1.0). AdAway is a trademark of its owner.
export const BrandAdaway = createIcon("BrandAdaway", "brand-adaway", {
  nodes: [
    [
      "path",
      {
        d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
      },
      { r: "press", a: 0.04, o: [12, 12] },
    ],
    ["path", { d: "M6 15.6h6a4.8 4.8 0 0 0 4.8-4.8V9a2.4 2.4 0 0 0-4.37-1.38L6 16.8" }, { r: "float", d: 0.05, a: 1.5 }],
    ["path", { d: "M16.8 9l1.2.3-1.2.3" }, { r: "float", d: 0.05, a: 1.5 }],
    ["path", { d: "M9 15.6a3.6 3.6 0 0 0 2.3-6.37" }, { r: "float", d: 0.05, a: 1.5 }],
  ],
});
