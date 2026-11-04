import { createIcon } from "../runtime/createIcon.js";

export const Armchair = createIcon("Armchair", "armchair", {
  svg: { r: "press", a: 0.08, o: [12, 20] },
  nodes: [
    ["path", { d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" }, { r: "float", d: 0.1, a: 1, o: [12, 6.5] }],
    ["path", { d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" }],
    ["path", { d: "M5 18v2" }],
    ["path", { d: "M19 18v2" }],
  ],
});
