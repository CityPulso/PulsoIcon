import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "readme" (CC0-1.0). ReadMe is a trademark of its owner.
export const BrandReadme = createIcon("BrandReadme", "brand-readme", {
  nodes: [
    ["path", { d: "M12 8.5A3.5 3.5 0 0 0 8.5 5H2v13h6.5a3.5 3.5 0 0 1 3.5 2 3.5 3.5 0 0 1 3.5-2H22V5h-6.5A3.5 3.5 0 0 0 12 8.5z" }],
    ["path", { d: "M12 8.5V20" }],
    ["path", { d: "M5 9h3.5M15.5 9H19" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M5 12.5h3.5M15.5 12.5H19" }, { r: "draw", d: 0.15 }],
  ],
});
