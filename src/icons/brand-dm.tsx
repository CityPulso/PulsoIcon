import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "dm" (CC0-1.0). dm is a trademark of its owner.
export const BrandDm = createIcon("BrandDm", "brand-dm", {
  nodes: [
    ["circle", { cx: "7", cy: "9.5", r: "2.5" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M9.5 4v8" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M12.5 12V7.5M12.5 9a1.5 1.5 0 0 1 3 0v3M15.5 9a1.5 1.5 0 0 1 3 0v3" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M3 16c3-1.5 6 1.5 9 0s6-1.5 9 0" }, { r: "sway", d: 0.1, a: 3, o: [12, 16] }],
    ["path", { d: "M4.5 19.5c2.5-1 5 1 7.5 0s5-1 7.5 0" }, { r: "sway", d: 0.2, a: 3, o: [12, 19.5] }],
  ],
});
