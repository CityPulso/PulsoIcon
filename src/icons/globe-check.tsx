import { createIcon } from "../runtime/createIcon.js";

export const GlobeCheck = createIcon("GlobeCheck", "globe-check", {
  nodes: [
    ["path", { d: "m15 6 2 2 4-4" }, { r: "draw", d: 0.15, o: [18, 6] }],
    ["path", { d: "M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10" }, { r: "spin", a: 30, o: [12, 12] }],
  ],
});
