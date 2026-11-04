import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "issuu" (CC0-1.0). Issuu is a trademark of its owner.
export const BrandIssuu = createIcon("BrandIssuu", "brand-issuu", {
  nodes: [
    ["path", { d: "M3 3h9a9 9 0 1 1-9 9z" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "4" }, { r: "pulse", d: 0.1, o: [12, 12] }],
    ["path", { d: "M12 12h.01" }, { r: "pop", d: 0.2, o: [12, 12] }],
  ],
});
