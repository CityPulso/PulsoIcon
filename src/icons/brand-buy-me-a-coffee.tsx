import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "buymeacoffee" (CC0-1.0). Buy Me A Coffee is a trademark of its owner.
export const BrandBuyMeACoffee = createIcon("BrandBuyMeACoffee", "brand-buy-me-a-coffee", {
  nodes: [
    ["path", { d: "M6.5 9.5 8 21h8l1.5-11.5" }, { r: "press", a: 0.06, o: [12, 21] }],
    ["path", { d: "M8.5 13.5h7" }, { r: "growX", d: 0.15, o: [12, 13.5] }],
    ["path", { d: "M5 6.5h14v3H5zM7 6.5l1-3h8l1 3" }, { r: "lift", y: -1, a: -8, o: [12, 6.5] }],
  ],
});
