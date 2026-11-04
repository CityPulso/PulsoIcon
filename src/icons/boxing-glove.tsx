import { createIcon } from "../runtime/createIcon.js";

export const BoxingGlove = createIcon("BoxingGlove", "boxing-glove", {
  nodes: [
    ["path", { d: "M7 18v-3H6a3 3 0 0 1 0-6h1V8a6 6 0 0 1 6-6h1a6 6 0 0 1 6 6v5a5 5 0 0 1-3 4.5V18" }, { r: "slide", y: -1, a: 2, o: [12, 12] }],
    ["path", { d: "M7 9v3h3" }, { r: "slide", y: -1, a: 2, o: [12, 12] }],
    ["rect", { x: "6", y: "18", width: "12", height: "4", rx: "1" }, { r: "slide", y: -1, a: 2, o: [12, 12] }],
  ],
});
