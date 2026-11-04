import { createIcon } from "../runtime/createIcon.js";

export const Hiking = createIcon("Hiking", "hiking", {
  nodes: [
    ["circle", { cx: "13", cy: "4", r: "1" }, { r: "slide", x: 1, a: 1, o: [12, 12] }],
    ["path", { d: "M12.5 8 11 14l-3 7" }, { r: "slide", x: 1, a: 1, o: [12, 12] }],
    ["path", { d: "m11 14 3 3.5.5 3.5" }, { r: "slide", x: 1, a: 1, o: [12, 12] }],
    ["rect", { x: "6", y: "8", width: "3.5", height: "5.5", rx: "1" }, { r: "slide", x: 1, a: 1, o: [12, 12] }],
    ["path", { d: "m12 9.5 4 2" }, { r: "slide", x: 1, a: 1, o: [12, 12] }],
    ["path", { d: "M16.5 9v12" }, { r: "tilt", d: 0.1, a: 10, o: [16.5, 21] }],
  ],
});
