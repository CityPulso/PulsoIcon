import { createIcon } from "../runtime/createIcon.js";

export const ArrowLeft = createIcon("ArrowLeft", "arrow-left", {
  nodes: [
    ["path", { d: "m12 19-7-7 7-7" }, { r: "shoot", x: -1, a: 6, o: [12, 12] }],
    ["path", { d: "M19 12H5" }, { r: "shoot", x: -1, a: 6, o: [12, 12] }],
  ],
});
