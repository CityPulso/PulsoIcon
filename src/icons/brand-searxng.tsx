import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "searxng" (CC0-1.0). SearXNG is a trademark of its owner.

export const BrandSearxng = createIcon("BrandSearxng", "brand-searxng", {
  nodes: [
    ["circle", { cx: "10", cy: "10", r: "7" }, { r: "wobble", a: 8, o: [10, 10] }],
    ["path", { d: "M7 10a3 3 0 0 1 3-3" }, { r: "wobble", a: 8, o: [10, 10] }],
    ["path", { d: "M15 15l6 6" }, { r: "draw", d: 0.1 }],
  ],
});
