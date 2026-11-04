import { createIcon } from "../runtime/createIcon.js";

export const Presentation = createIcon("Presentation", "presentation", {
  nodes: [
    ["path", { d: "M2 3h20" }, { r: "growX", d: 0.05, o: [12, 3] }],
    ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" }, { r: "press", a: 0.04, o: [12, 3] }],
    ["path", { d: "m7 21 5-5 5 5" }, { r: "grow", d: 0.1, o: [12, 16] }],
  ],
});
