import { createIcon } from "../runtime/createIcon.js";

export const SquareDashedBottom = createIcon("SquareDashedBottom", "square-dashed-bottom", {
  nodes: [
    ["path", { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 21h1" }, { r: "fade", d: 0.05, o: [12, 21] }],
    ["path", { d: "M14 21h1" }, { r: "fade", d: 0.13, o: [12, 21] }],
  ],
});
