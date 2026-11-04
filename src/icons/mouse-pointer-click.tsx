import { createIcon } from "../runtime/createIcon.js";

export const MousePointerClick = createIcon("MousePointerClick", "mouse-pointer-click", {
  nodes: [
    ["path", { d: "M14 4.1 12 6" }, { r: "pop", d: 0.14, o: [13, 5.05] }],
    ["path", { d: "m5.1 8-2.9-.8" }, { r: "pop", d: 0.18, o: [3.65, 7.6] }],
    ["path", { d: "m6 12-1.9 2" }, { r: "pop", d: 0.22, o: [5.05, 13] }],
    ["path", { d: "M7.2 2.2 8 5.1" }, { r: "pop", d: 0.1, o: [7.6, 3.65] }],
    [
      "path",
      { d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" },
      { r: "press", a: 0.12, o: [9, 9] },
    ],
  ],
});
