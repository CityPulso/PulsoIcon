import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "sourcetree" (CC0-1.0). Sourcetree is a trademark of its owner.
export const BrandSourcetree = createIcon("BrandSourcetree", "brand-sourcetree", {
  nodes: [
    ["circle", { cx: "12", cy: "9", r: "6.5" }, { r: "press", a: 0.04, o: [12, 9] }],
    ["circle", { cx: "12", cy: "9", r: "2" }, { r: "pop", d: 0.1, o: [12, 9] }],
    ["path", { d: "M12 15.5V22" }, { r: "draw", d: 0.15 }],
  ],
});
