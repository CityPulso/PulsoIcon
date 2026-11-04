import { createIcon } from "../runtime/createIcon.js";

export const BrandPhotoshop = createIcon("BrandPhotoshop", "brand-photoshop", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 16V8h2.5a2.5 2.5 0 0 1 0 5H7" }, { r: "draw", d: 0.05, o: [8.75, 12] }],
    ["path", { d: "M17 11.6a1.8 1.8 0 0 0-1.6-.6c-.9 0-1.6.5-1.6 1.2 0 1.8 3.2 1 3.2 2.8 0 .7-.7 1.2-1.6 1.2a1.9 1.9 0 0 1-1.8-.8" }, { r: "draw", d: 0.15, o: [15.4, 13.5] }],
  ],
});
