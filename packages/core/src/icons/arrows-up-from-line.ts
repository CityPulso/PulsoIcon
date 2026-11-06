import { icon } from "../icon.js";

export const ArrowsUpFromLine = icon("ArrowsUpFromLine", "arrows-up-from-line", {
  nodes: [
    ["path", { d: "m4 6 3-3 3 3" }, { r: "shoot", y: -1, a: 4, o: [7, 10] }],
    ["path", { d: "M7 17V3" }, { r: "shoot", y: -1, a: 4, o: [7, 10] }],
    ["path", { d: "m14 6 3-3 3 3" }, { r: "shoot", d: 0.12, y: -1, a: 4, o: [17, 10] }],
    ["path", { d: "M17 17V3" }, { r: "shoot", d: 0.12, y: -1, a: 4, o: [17, 10] }],
    ["path", { d: "M4 21h16" }, { r: "growX", o: [12, 21] }],
  ],
});
