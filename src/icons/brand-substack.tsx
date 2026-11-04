import { createIcon } from "../runtime/createIcon.js";

export const BrandSubstack = createIcon("BrandSubstack", "brand-substack", {
  nodes: [
    ["path", { d: "M5 4h14" }, { r: "growX", o: [5, 4] }],
    ["path", { d: "M5 8h14" }, { r: "growX", d: 0.08, o: [5, 8] }],
    ["path", { d: "M5 12h14v9l-7-4-7 4z" }, { r: "drop", d: 0.15, y: -1, a: 1.5, o: [12, 16] }],
  ],
});
