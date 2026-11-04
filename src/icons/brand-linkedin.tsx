import { createIcon } from "../runtime/createIcon.js";

export const BrandLinkedin = createIcon("BrandLinkedin", "brand-linkedin", {
  nodes: [
    ["path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }, { r: "grow", d: 0.1, o: [16, 21] }],
    ["rect", { x: "2", y: "9", width: "4", height: "12", rx: "0" }, { r: "grow", d: 0.05, o: [4, 21] }],
    ["circle", { cx: "4", cy: "4", r: "2" }, { r: "drop", a: 3, o: [4, 4] }],
  ],
});
