import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "modal" (CC0-1.0). Modal is a trademark of its owner.
export const BrandModal = createIcon("BrandModal", "brand-modal", {
  nodes: [
    ["path", { d: "M2 16 6 8h4l-4 8z" }, { r: "press", a: 0.06, o: [12, 16] }],
    ["path", { d: "M22 16l-4-8h-4l4 8z" }, { r: "press", a: 0.06, o: [12, 16] }],
    ["path", { d: "M10 8l2 4 2-4" }, { r: "draw", d: 0.1 }],
  ],
});
