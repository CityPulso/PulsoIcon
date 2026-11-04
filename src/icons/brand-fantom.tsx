import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "fantom" (CC0-1.0). Fantom is a trademark of its owner.
export const BrandFantom = createIcon("BrandFantom", "brand-fantom", {
  nodes: [
    ["path", { d: "M12 2l7 3.5v13L12 22l-7-3.5v-13z" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M5 5.5l7 3.5 7-3.5" }, { r: "draw", d: 0.1, o: [12, 7] }],
    ["path", { d: "M5 12.5l7-3.5 7 3.5" }, { r: "draw", d: 0.18, o: [12, 11] }],
    ["path", { d: "M12 9v7" }, { r: "draw", d: 0.26, o: [12, 12.5] }],
    ["path", { d: "M5 12.5l7 3.5 7-3.5" }, { r: "draw", d: 0.34, o: [12, 14] }],
  ],
});
