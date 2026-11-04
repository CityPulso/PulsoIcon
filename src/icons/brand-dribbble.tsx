import { createIcon } from "../runtime/createIcon.js";

export const BrandDribbble = createIcon("BrandDribbble", "brand-dribbble", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "roll", a: 1, o: [12, 12] }],
    ["path", { d: "M2.5 10.5c6 .5 12-1 16.5-5" }, { r: "roll", a: 1, o: [12, 12] }],
    ["path", { d: "M21.8 13.5c-6-1.5-12 .5-15.3 6" }, { r: "roll", a: 1, o: [12, 12] }],
    ["path", { d: "M8.5 2.6c3.5 4.5 6.5 11 7.5 18.8" }, { r: "roll", a: 1, o: [12, 12] }],
  ],
});
