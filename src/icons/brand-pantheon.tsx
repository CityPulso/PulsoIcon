import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "pantheon" (CC0-1.0). Pantheon is a trademark of its owner.
export const BrandPantheon = createIcon("BrandPantheon", "brand-pantheon", {
  nodes: [
    ["path", { d: "M13 2 9.5 8.5" }, { r: "flicker", o: [11, 5] }],
    ["path", { d: "M6 8.5h10.5a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5H6z" }, { r: "press", d: 0.05, a: 0.06, o: [12, 12] }],
    ["path", { d: "M12 8.5v7M12 12h6" }, { r: "press", d: 0.05, a: 0.06, o: [12, 12] }],
    ["path", { d: "M10.5 15.5l3 2.5-1.5 4" }, { r: "flicker", d: 0.1, o: [12, 19] }],
  ],
});
