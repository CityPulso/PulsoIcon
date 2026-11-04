import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "pandas" (CC0-1.0). pandas is a trademark of its owner.
export const BrandPandas = createIcon("BrandPandas", "brand-pandas", {
  nodes: [
    ["path", { d: "M4.5 7.5v13.5" }, { r: "grow", o: [4.5, 21] }],
    ["path", { d: "M9.5 3v4.5M9.5 13v3.5" }, { r: "grow", d: 0.08, o: [9.5, 16.5] }],
    ["path", { d: "M9.5 10.25h.01M14.5 14h.01" }, { r: "pop", d: 0.16, o: [12, 12] }],
    ["path", { d: "M14.5 7.5V10M14.5 17.5V21" }, { r: "grow", d: 0.24, o: [14.5, 21] }],
    ["path", { d: "M19.5 3v14" }, { r: "grow", d: 0.32, o: [19.5, 17] }],
  ],
});
