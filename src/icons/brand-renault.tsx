import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "renault" (CC0-1.0). Renault is a trademark of its owner.
export const BrandRenault = createIcon("BrandRenault", "brand-renault", {
  nodes: [
    ["path", { d: "M12 2l6 10-6 10-6-10z" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M12 7l3 5-3 5-3-5z" }, { r: "flip", d: 0.1, o: [12, 12] }],
  ],
});
