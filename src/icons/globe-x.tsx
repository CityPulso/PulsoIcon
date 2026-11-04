import { createIcon } from "../runtime/createIcon.js";

export const GlobeX = createIcon("GlobeX", "globe-x", {
  nodes: [
    ["path", { d: "m16 3 5 5" }, { r: "draw", d: 0.15, o: [18.5, 5.5] }],
    ["path", { d: "M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10" }, { r: "spin", a: 30, o: [12, 12] }],
    ["path", { d: "m21 3-5 5" }, { r: "draw", d: 0.25, o: [18.5, 5.5] }],
  ],
});
