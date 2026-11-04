import { createIcon } from "../runtime/createIcon.js";

export const BrandWaze = createIcon("BrandWaze", "brand-waze", {
  nodes: [
    ["path", { d: "M5.5 16C4 16 3 15 2.5 14c1.2-.3 1.5-1.2 1.5-2.5C4 7.3 7.5 4 12 4s8 3.3 8 7.5S16.5 18 12 18h-2" }, { r: "bounce", y: -1.5, o: [12, 20.5] }],
    ["circle", { cx: "7.5", cy: "18.5", r: "1.5" }, { r: "bounce", y: -1.5, o: [12, 20.5] }],
    ["circle", { cx: "15", cy: "18.5", r: "1.5" }, { r: "bounce", y: -1.5, o: [12, 20.5] }],
    ["path", { d: "M10 9.5h.01M15 9.5h.01" }, { r: "bounce", y: -1.5, o: [12, 20.5] }],
    ["path", { d: "M10 12.5a2.5 2.5 0 0 0 4.5 0" }, { r: "bounce", y: -1.5, o: [12, 20.5] }],
  ],
});
