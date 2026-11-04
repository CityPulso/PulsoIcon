import { createIcon } from "../runtime/createIcon.js";

export const BrandUps = createIcon("BrandUps", "brand-ups", {
  nodes: [
    ["path", { d: "M4 4.5C6.5 3 9.2 2.3 12 2.3s5.5.7 8 2.2V13c0 4.3-3.5 7-8 8.8C7.5 20 4 17.3 4 13z" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M4 9c4.5-2.8 10-3.5 16-2.5" }, { r: "draw", d: 0.05, o: [12, 7.5] }],
    ["path", { d: "M9.5 11v3a2.5 2.5 0 0 0 5 0v-3" }, { r: "draw", d: 0.15, o: [12, 13] }],
  ],
});
