import { createIcon } from "../runtime/createIcon.js";

export const BrandInvision = createIcon("BrandInvision", "brand-invision", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M10 8h.01" }, { r: "pop", d: 0.05, o: [10, 8] }],
    ["path", { d: "M9.5 11 8 16.5" }, { r: "draw", d: 0.1, o: [9, 14] }],
    ["path", { d: "M12.5 11 11 16.5" }, { r: "draw", d: 0.15, o: [12, 14] }],
    ["path", { d: "M12 13a2.4 2.4 0 0 1 4.3 1.6l-.6 1.4a.6.6 0 0 0 .8.6" }, { r: "draw", d: 0.2, o: [14, 14] }],
  ],
});
