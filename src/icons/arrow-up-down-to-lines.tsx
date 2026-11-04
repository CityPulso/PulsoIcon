import { createIcon } from "../runtime/createIcon.js";

export const ArrowUpDownToLines = createIcon("ArrowUpDownToLines", "arrow-up-down-to-lines", {
  nodes: [
    ["path", { d: "M5 3h14" }, { r: "press", a: 0.1, o: [12, 3] }],
    ["path", { d: "M5 21h14" }, { r: "press", a: 0.1, o: [12, 21] }],
    ["path", { d: "M12 7v10" }, { r: "drawOut", o: [12, 12] }],
    ["path", { d: "m9 10 3-3 3 3" }, { r: "slide", y: -1, a: 1, o: [12, 8.5] }],
    ["path", { d: "m9 14 3 3 3-3" }, { r: "slide", y: 1, a: 1, o: [12, 15.5] }],
  ],
});
