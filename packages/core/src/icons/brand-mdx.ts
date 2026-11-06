import { icon } from "../icon.js";

// Drawn after Simple Icons "mdx" (CC0-1.0). MDX is a trademark of its owner.
export const BrandMdx = icon("BrandMdx", "brand-mdx", {
  nodes: [
    ["rect", { x: "2", y: "6.5", width: "20", height: "11", rx: "2" }],
    ["path", { d: "M5 14.5v-5l2 2.5 2-2.5v5" }, { r: "draw" }],
    ["path", { d: "M12 9.5v5M10.5 13l1.5 1.5 1.5-1.5" }, { r: "slide", d: 0.1, y: 1, a: 1 }],
    ["path", { d: "M15 9.5l4 5M19 9.5l-4 5" }, { r: "pop", d: 0.25, o: [17, 12] }],
  ],
});
