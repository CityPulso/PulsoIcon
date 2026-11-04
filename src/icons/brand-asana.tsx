import { createIcon } from "../runtime/createIcon.js";

export const BrandAsana = createIcon("BrandAsana", "brand-asana", {
  nodes: [
    ["circle", { cx: "12", cy: "7", r: "3.5" }, { r: "bounce", y: -1, a: 1, o: [12, 7] }],
    ["circle", { cx: "6.5", cy: "15.5", r: "3.5" }, { r: "bounce", d: 0.1, y: -1, a: 1, o: [6.5, 15.5] }],
    ["circle", { cx: "17.5", cy: "15.5", r: "3.5" }, { r: "bounce", d: 0.2, y: -1, a: 1, o: [17.5, 15.5] }],
  ],
});
