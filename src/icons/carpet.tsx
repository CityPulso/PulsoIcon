import { createIcon } from "../runtime/createIcon.js";

export const Carpet = createIcon("Carpet", "carpet", {
  nodes: [
    ["rect", { x: "5", y: "4", width: "14", height: "16", rx: "1" }, { r: "grow", o: [12, 4] }],
    ["path", { d: "m12 8 3 4-3 4-3-4z" }, { r: "grow", o: [12, 4] }],
    ["path", { d: "M7 2v2M10 2v2M14 2v2M17 2v2" }, { r: "fade", o: [12, 3] }],
    ["path", { d: "M7 20v2M10 20v2M14 20v2M17 20v2" }, { r: "grow", o: [12, 4] }],
  ],
});
