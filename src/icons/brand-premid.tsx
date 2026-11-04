import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "premid" (CC0-1.0). PreMiD is a trademark of its owner.

export const BrandPremid = createIcon("BrandPremid", "brand-premid", {
  nodes: [
    ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }],
    ["path", { d: "M6 9v6l4.5-3z" }, { r: "press", a: 0.12, o: [8, 12] }],
    ["path", { d: "M13.5 9.5h3" }, { r: "growX", d: 0.05, o: [13.5, 9.5] }],
    ["path", { d: "M13.5 12h5" }, { r: "growX", d: 0.12, o: [13.5, 12] }],
    ["path", { d: "M13.5 14.5h4" }, { r: "growX", d: 0.19, o: [13.5, 14.5] }],
  ],
});
