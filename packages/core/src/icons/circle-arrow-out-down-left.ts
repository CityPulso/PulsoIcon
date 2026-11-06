import { icon } from "../icon.js";

export const CircleArrowOutDownLeft = icon("CircleArrowOutDownLeft", "circle-arrow-out-down-left", {
  nodes: [
    ["path", { d: "M2 12a10 10 0 1 1 10 10" }, { r: "spin", a: -45, o: [12, 12] }],
    ["path", { d: "m2 22 10-10" }, { r: "shoot", d: 0.1, x: -1, y: 1, a: 3, o: [7, 17] }],
    ["path", { d: "M8 22H2v-6" }, { r: "shoot", d: 0.1, x: -1, y: 1, a: 3, o: [7, 17] }],
  ],
});
