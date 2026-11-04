import { createIcon } from "../runtime/createIcon.js";

export const BrandMarkdown = createIcon("BrandMarkdown", "brand-markdown", {
  nodes: [
    ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6 15V9l2.5 3L11 9v6" }, { r: "draw", d: 0.05, o: [8.5, 12] }],
    ["path", { d: "M17 9v6" }, { r: "grow", d: 0.2, o: [17, 9] }],
    ["path", { d: "m14.5 12.5 2.5 2.5 2.5-2.5" }, { r: "drop", d: 0.25, y: -1, a: 1, o: [17, 13.75] }],
  ],
});
