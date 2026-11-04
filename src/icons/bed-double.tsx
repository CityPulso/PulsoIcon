import { createIcon } from "../runtime/createIcon.js";

export const BedDouble = createIcon("BedDouble", "bed-double", {
  nodes: [
    ["path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }, { r: "float", a: 1.5, o: [12, 7] }],
    ["path", { d: "M12 4v6" }, { r: "fade", d: 0.1, o: [12, 7] }],
    ["path", { d: "M2 18h20" }, { r: "press", a: 0.04, o: [12, 20] }],
  ],
});
