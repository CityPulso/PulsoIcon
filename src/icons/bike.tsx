import { createIcon } from "../runtime/createIcon.js";

export const Bike = createIcon("Bike", "bike", {
  nodes: [
    ["circle", { cx: "18.5", cy: "17.5", r: "3.5" }, { r: "spin", a: 360, o: [18.5, 17.5] }],
    ["circle", { cx: "5.5", cy: "17.5", r: "3.5" }, { r: "spin", a: 360, o: [5.5, 17.5] }],
    ["circle", { cx: "15", cy: "5", r: "1" }, { r: "slide", d: 0.1, x: 1, a: 1, o: [13, 10.75] }],
    ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2" }, { r: "slide", d: 0.1, x: 1, a: 1, o: [13, 10.75] }],
  ],
});
