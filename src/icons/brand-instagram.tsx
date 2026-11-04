import { createIcon } from "../runtime/createIcon.js";

export const BrandInstagram = createIcon("BrandInstagram", "brand-instagram", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }, { r: "blink", d: 0.05, o: [12, 12] }],
    ["path", { d: "M17.5 6.5h.01" }, { r: "flicker", d: 0.2, o: [17.5, 6.5] }],
  ],
});
