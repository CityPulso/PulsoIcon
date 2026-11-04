import { createIcon } from "../runtime/createIcon.js";

export const BedSingle = createIcon("BedSingle", "bed-single", {
  nodes: [
    ["path", { d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" }, { r: "float", a: 1.5, o: [12, 7] }],
    ["path", { d: "M3 18h18" }, { r: "press", a: 0.04, o: [12, 20] }],
  ],
});
