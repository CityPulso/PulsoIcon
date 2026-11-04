import { createIcon } from "../runtime/createIcon.js";

export const BadgeMinus = createIcon("BadgeMinus", "badge-minus", {
  nodes: [
    [
      "path",
      { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" },
      { r: "press", a: 0.08, o: [11.992, 12.004] },
    ],
    ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }, { r: "growX", d: 0.15, o: [12, 12] }],
  ],
});
