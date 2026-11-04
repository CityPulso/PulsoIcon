import { createIcon } from "../runtime/createIcon.js";

export const BrandKimi = createIcon("BrandKimi", "brand-kimi", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 7.5v9M8 12.5l4.5-5M9.8 10.5l3.7 6" }, { r: "draw", d: 0.05, o: [10, 12] }],
    ["path", { d: "M16.5 7.5h.01" }, { r: "pop", d: 0.25, a: 0.6, o: [16.5, 7.5] }],
  ],
});
