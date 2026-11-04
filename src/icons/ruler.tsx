import { createIcon } from "../runtime/createIcon.js";

export const Ruler = createIcon("Ruler", "ruler", {
  nodes: [
    [
      "path",
      { d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" },
      { r: "slide", x: 1, y: 1, a: 1, o: [12.002, 12.002] },
    ],
    ["path", { d: "m14.5 12.5 2-2" }, { r: "pop", d: 0.15, o: [15.5, 11.5] }],
    ["path", { d: "m11.5 9.5 2-2" }, { r: "pop", d: 0.1, o: [12.5, 8.5] }],
    ["path", { d: "m8.5 6.5 2-2" }, { r: "pop", d: 0.05, o: [9.5, 5.5] }],
    ["path", { d: "m17.5 15.5 2-2" }, { r: "pop", d: 0.2, o: [18.5, 14.5] }],
  ],
});
