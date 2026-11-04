import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "adblockplus" (CC0-1.0). Adblock Plus is a trademark of its owner.
export const BrandAdblockPlus = createIcon("BrandAdblockPlus", "brand-adblock-plus", {
  nodes: [
    [
      "path",
      {
        d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
      },
      { r: "press", a: 0.04, o: [12, 12] },
    ],
    ["path", { d: "M5.5 15.5L7.25 8.5h.5L9.5 15.5" }, { r: "draw", d: 0.08 }],
    ["path", { d: "M6.4 13.2h2.2" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M11 8.5h1.25a1.75 1.75 0 0 1 0 3.5H11z M11 12h1.5a1.75 1.75 0 0 1 0 3.5H11z" }, { r: "draw", d: 0.18 }],
    ["path", { d: "M15 15.5v-7h1.5a1.75 1.75 0 0 1 0 3.5H15" }, { r: "draw", d: 0.28 }],
  ],
});
