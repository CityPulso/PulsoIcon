import { createIcon } from "../runtime/createIcon.js";

export const LineHeight = createIcon("LineHeight", "line-height", {
  nodes: [
    ["path", { d: "M15 14H9" }, { r: "fade", d: 0.1, o: [12, 12] }],
    ["path", { d: "M21 21H3" }, { r: "slide", y: 1, a: 1.5, o: [12, 21] }],
    ["path", { d: "M21 3H3" }, { r: "slide", y: -1, a: 1.5, o: [12, 3] }],
    ["path", { d: "m8 16 3.453-7.648a.6.6 0 011.094.001L16 16" }, { r: "fade", d: 0.1, o: [12, 12] }],
  ],
});
