import { createIcon } from "../runtime/createIcon.js";

export const BrandFacetime = createIcon("BrandFacetime", "brand-facetime", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["rect", { x: "6", y: "9", width: "8", height: "6", rx: "1.5" }, { r: "pop", d: 0.05, a: 0.2, o: [12, 12] }],
    ["path", { d: "m14 12 4-2.5v5z" }, { r: "pop", d: 0.05, a: 0.2, o: [12, 12] }],
  ],
});
