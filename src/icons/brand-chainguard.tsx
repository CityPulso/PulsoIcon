import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "chainguard" (CC0-1.0). Chainguard is a trademark of its owner.
export const BrandChainguard = createIcon("BrandChainguard", "brand-chainguard", {
  nodes: [
    ["path", { d: "M7 13.5V10a5 5 0 0 1 10 0v3.5" }, { r: "float", a: 1, o: [12, 10] }],
    ["path", { d: "M10 10.5h.01M14 10.5h.01" }, { r: "blink", d: 0.3, o: [12, 10.5] }],
    ["path", { d: "M7 13.5c-1 2-3 3-5 2.5M17 13.5c1 2 3 3 5 2.5" }, { r: "sway", a: 6, o: [12, 14] }],
    ["path", { d: "M9.5 14.5c-.5 2-1.5 3.5-3 5M14.5 14.5c.5 2 1.5 3.5 3 5M12 15v5" }, { r: "sway", d: 0.1, a: -6, o: [12, 14] }],
  ],
});
