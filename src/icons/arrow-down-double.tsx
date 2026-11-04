import { createIcon } from "../runtime/createIcon.js";

export const ArrowDownDouble = createIcon("ArrowDownDouble", "arrow-down-double", {
  nodes: [
    ["path", { d: "M12 4v16" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "m7 10 5 5 5-5" }, { r: "slide", d: 0.15, y: 1, a: 1.5, o: [12, 12.5] }],
    ["path", { d: "m7 15 5 5 5-5" }, { r: "slide", d: 0.25, y: 1, a: 1.5, o: [12, 17.5] }],
  ],
});
