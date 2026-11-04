import { createIcon } from "../runtime/createIcon.js";

export const BikeElectric = createIcon("BikeElectric", "bike-electric", {
  nodes: [
    ["circle", { cx: "18.5", cy: "17.5", r: "3.5" }, { r: "spin", a: 360, o: [18.5, 17.5] }],
    ["circle", { cx: "5.5", cy: "17.5", r: "3.5" }, { r: "spin", a: 360, o: [5.5, 17.5] }],
    ["path", { d: "M5.5 17.5 9 11h7" }],
    ["path", { d: "m8 9 4 8.5 4-6.5" }],
    ["path", { d: "M18.5 17.5 15.5 8H14" }],
    ["path", { d: "M7 9h2" }],
    ["path", { d: "M5 2 3 6h3l-2 4" }, { r: "flicker", d: 0.1, o: [4.5, 6] }],
  ],
});
