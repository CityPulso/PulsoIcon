import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "saudia" (CC0-1.0). Saudia is a trademark of its owner.
export const BrandSaudia = createIcon("BrandSaudia", "brand-saudia", {
  nodes: [
    ["path", { d: "M2 10c4.5 0 7.5 2.5 10 7 2.5-4.5 5.5-7 10-7" }, { r: "float", a: 1.5 }],
    ["path", { d: "M12 17V7.5" }, { r: "sway", d: 0.05, a: 5, o: [12, 17] }],
    ["path", { d: "M12 7.5c-2-1.5-4.5-1.5-6.5.5M12 7.5c2-1.5 4.5-1.5 6.5.5M12 7.5c-1-2-2.5-3-4.5-3M12 7.5c1-2 2.5-3 4.5-3" }, { r: "sway", d: 0.05, a: 5, o: [12, 17] }],
  ],
});
