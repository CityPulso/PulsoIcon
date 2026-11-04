import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "insta360" (CC0-1.0). Insta360 is a trademark of its owner.
export const BrandInsta360 = createIcon("BrandInsta360", "brand-insta360", {
  nodes: [
    ["path", { d: "M15.4 2.6A10 10 0 1 0 20.7 7" }, { r: "turn", a: 25, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "4.5" }, { r: "pulse", d: 0.1, o: [12, 12] }],
    ["path", { d: "M12 12h.01" }, { r: "pop", d: 0.2, o: [12, 12] }],
  ],
});
