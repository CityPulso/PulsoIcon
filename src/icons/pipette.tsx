import { createIcon } from "../runtime/createIcon.js";

export const Pipette = createIcon("Pipette", "pipette", {
  nodes: [
    [
      "path",
      { d: "m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12" },
      { r: "press", d: 0.05, a: 0.05, o: [8, 16] },
    ],
    ["path", { d: "m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z" }, { r: "slide", x: 1, y: -1, a: 1, o: [16.5, 7.5] }],
    ["path", { d: "m2 22 .414-.414" }, { r: "drop", d: 0.15, a: 2, o: [2.207, 21.793] }],
  ],
});
