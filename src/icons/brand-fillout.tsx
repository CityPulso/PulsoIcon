import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "fillout" (CC0-1.0). Fillout is a trademark of its owner.
export const BrandFillout = createIcon("BrandFillout", "brand-fillout", {
  nodes: [
    ["path", { d: "M10 7H5.5v10M5.5 11.5h4" }, { r: "draw", o: [7.5, 12] }],
    ["path", { d: "M12.5 11v6" }, { r: "draw", d: 0.1, o: [12.5, 14] }],
    ["path", { d: "M12.5 7.5h.01" }, { r: "pop", d: 0.4, a: 0.6, o: [12.5, 7.5] }],
    ["path", { d: "M15.5 6.5V17" }, { r: "draw", d: 0.18, o: [15.5, 12] }],
    ["path", { d: "M18.5 6.5V17" }, { r: "draw", d: 0.26, o: [18.5, 12] }],
  ],
});
