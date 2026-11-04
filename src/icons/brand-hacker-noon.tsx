import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "hackernoon" (CC0-1.0). Hacker Noon is a trademark of its owner.

export const BrandHackerNoon = createIcon("BrandHackerNoon", "brand-hacker-noon", {
  nodes: [
    ["path", { d: "M9 6V2.5h6V6" }],
    ["path", { d: "M9 18v3.5h6V18" }],
    ["path", { d: "M8.5 6h7L19 9.5v5L15.5 18h-7L5 14.5v-5z" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M19 12h1.5" }],
    ["path", { d: "M12 12V9" }, { r: "turn", a: 60, o: [12, 12] }],
    ["path", { d: "M10 9h4" }, { r: "turn", a: 60, o: [12, 12] }],
  ],
});
