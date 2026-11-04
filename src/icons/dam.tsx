import { createIcon } from "../runtime/createIcon.js";

export const Dam = createIcon("Dam", "dam", {
  nodes: [
    ["path", { d: "M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }, { r: "slide", d: 0.05, x: 1, a: 1.5, o: [16.5, 12] }],
    ["path", { d: "M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }, { r: "slide", d: 0.15, x: 1, a: 1.5, o: [16.875, 18] }],
    ["path", { d: "M2 10h4" }, { r: "fade", d: 0.05, o: [4, 12] }],
    ["path", { d: "M2 14h4" }, { r: "fade", d: 0.1, o: [4, 12] }],
    ["path", { d: "M2 18h4" }, { r: "fade", d: 0.15, o: [4, 12] }],
    ["path", { d: "M2 6h4" }, { r: "fade", o: [4, 12] }],
    ["path", { d: "M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z" }, { r: "press", a: 0.04, o: [9, 21] }],
  ],
});
