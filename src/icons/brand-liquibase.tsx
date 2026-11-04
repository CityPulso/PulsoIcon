import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "liquibase" (CC0-1.0). Liquibase is a trademark of its owner.

export const BrandLiquibase = createIcon("BrandLiquibase", "brand-liquibase", {
  nodes: [
    ["ellipse", { cx: "12", cy: "5", rx: "7", ry: "2.5" }],
    ["path", { d: "M5 5v14c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5" }],
    ["path", { d: "M5 11.5c5 0 9-4 14-4" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M5 17c5 0 9-4 14-4" }, { r: "draw", d: 0.2 }],
  ],
});
