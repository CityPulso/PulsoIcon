import { createIcon } from "../runtime/createIcon.js";

export const BrandLinkedinSquare = createIcon("BrandLinkedinSquare", "brand-linkedin-square", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 7.5h.01" }, { r: "drop", a: 3, d: 0.05, o: [8, 7.5] }],
    ["path", { d: "M8 11v6" }, { r: "grow", d: 0.1, o: [8, 17] }],
    ["path", { d: "M12 17v-6" }, { r: "grow", d: 0.15, o: [12, 17] }],
    ["path", { d: "M12 14a2.5 2.5 0 0 1 5 0v3" }, { r: "draw", d: 0.2, o: [14.5, 14] }],
  ],
});
