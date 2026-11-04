import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "devbox" (CC0-1.0). Devbox is a trademark of its owner.
export const BrandDevbox = createIcon("BrandDevbox", "brand-devbox", {
  nodes: [
    ["path", { d: "M8 7l-5 5 5 5" }, { r: "slide", x: -1, a: 1, o: [5.5, 12] }],
    ["path", { d: "M16 7l5 5-5 5" }, { r: "slide", x: 1, a: 1, o: [18.5, 12] }],
    ["path", { d: "M14 4l-4 16" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
