import { createIcon } from "../runtime/createIcon.js";

export const BrandAnthropic = createIcon("BrandAnthropic", "brand-anthropic", {
  nodes: [
    ["path", { d: "M2 20 7 4h2l5 16" }, { r: "draw", o: [8, 12] }],
    ["path", { d: "M4.2 14h7.6" }, { r: "growX", d: 0.25, o: [4.2, 14] }],
    ["path", { d: "M14 4h2l6 16" }, { r: "draw", d: 0.15, o: [18, 12] }],
  ],
});
