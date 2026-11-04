import { createIcon } from "../runtime/createIcon.js";

export const BrandWindows = createIcon("BrandWindows", "brand-windows", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "8", height: "8", rx: "1" }, { r: "pop", o: [7, 7] }],
    ["rect", { x: "13", y: "3", width: "8", height: "8", rx: "1" }, { r: "pop", d: 0.06, o: [17, 7] }],
    ["rect", { x: "3", y: "13", width: "8", height: "8", rx: "1" }, { r: "pop", d: 0.12, o: [7, 17] }],
    ["rect", { x: "13", y: "13", width: "8", height: "8", rx: "1" }, { r: "pop", d: 0.18, o: [17, 17] }],
  ],
});
