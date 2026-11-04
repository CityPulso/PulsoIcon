import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "htop" (CC0-1.0). htop is a trademark of its owner.

export const BrandHtop = createIcon("BrandHtop", "brand-htop", {
  nodes: [
    ["path", { d: "M4 3H2.5v18H4M20 3h1.5v18H20" }],
    ["path", { d: "M6 4.5v3M9 4.5v3M15 4.5v3M18 4.5v3" }, { r: "grow", o: [12, 7.5] }],
    ["path", { d: "M6 10.5v3M9 10.5v3M12 10.5v3M15 10.5v3M18 10.5v3" }, { r: "grow", d: 0.1, o: [12, 13.5] }],
    ["path", { d: "M6 16.5v3M9 16.5v3M15 16.5v3M18 16.5v3" }, { r: "grow", d: 0.2, o: [12, 19.5] }],
  ],
});
