import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "ieee" (CC0-1.0). IEEE is a trademark of its owner.

export const BrandIeee = createIcon("BrandIeee", "brand-ieee", {
  nodes: [
    ["path", { d: "M12 2.5 21.5 12 12 21.5 2.5 12z" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M12 17.5V6.5M10 8.5l2-2 2 2" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M15 11.3c1 .4 1.5.9 1.5 1.4 0 1.2-2 2-4.5 2s-4.5-.8-4.5-2c0-.5.5-1 1.5-1.4" }, { r: "turn", a: 20, d: 0.2, o: [12, 12.7] }],
  ],
});
