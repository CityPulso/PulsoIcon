import { createIcon } from "../runtime/createIcon.js";

export const BrandCitypulso = createIcon("BrandCitypulso", "brand-citypulso", {
  nodes: [
    ["path", { d: "M13.5 6.3a7 7 0 1 0 0 11.4" }, { r: "draw", o: [9.5, 12] }],
    ["path", { d: "M7 14v-2.5" }, { r: "grow", d: 0.15, o: [7, 14] }],
    ["path", { d: "M9.5 14v-11" }, { r: "grow", d: 0.22, o: [9.5, 14] }],
    ["path", { d: "M12 14v-6" }, { r: "grow", d: 0.29, o: [12, 14] }],
    ["path", { d: "M15.5 21v-9a3.25 3.25 0 1 1 3.25 3.25h-1" }, { r: "press", d: 0.1, a: 0.05, o: [15.5, 21] }],
  ],
});
