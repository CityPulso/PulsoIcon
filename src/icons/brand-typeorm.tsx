import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "typeorm" (MIT). TypeORM is a trademark of its owner.
export const BrandTypeorm = createIcon("BrandTypeorm", "brand-typeorm", {
  nodes: [
    ["path", { d: "M6.5 3H6a2 2 0 0 0-2 2v4.5L2.5 12 4 14.5V19a2 2 0 0 0 2 2h.5" }, { r: "slide", x: -0.8, a: 1 }],
    ["path", { d: "M17.5 3h.5a2 2 0 0 1 2 2v4.5l1.5 2.5-1.5 2.5V19a2 2 0 0 1-2 2h-.5" }, { r: "slide", x: 0.8, a: 1 }],
    ["rect", { x: "8", y: "5", width: "5", height: "5.5", rx: "1" }, { r: "pop", d: 0.1, o: [10.5, 7.75] }],
    ["rect", { x: "8", y: "13.5", width: "5", height: "5.5", rx: "1" }, { r: "pop", d: 0.2, o: [10.5, 16.25] }],
    ["path", { d: "M13 7.75h2.5v8.5H13" }, { r: "draw", d: 0.3 }],
  ],
});
