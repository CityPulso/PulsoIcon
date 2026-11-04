import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "ton" (CC0-1.0). TON is a trademark of its owner.

export const BrandTon = createIcon("BrandTon", "brand-ton", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7.5 8h9L12 17z" }, { r: "drop", y: -1, a: 3 }],
    ["path", { d: "M12 8v9" }, { r: "drop", y: -1, a: 3 }],
  ],
});
