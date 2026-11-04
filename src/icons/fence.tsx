import { createIcon } from "../runtime/createIcon.js";

export const Fence = createIcon("Fence", "fence", {
  nodes: [
    ["path", { d: "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }, { r: "grow", o: [4, 12] }],
    ["path", { d: "M6 8h4" }, { r: "growX", d: 0.2, o: [8, 8] }],
    ["path", { d: "M6 18h4" }, { r: "growX", d: 0.24, o: [8, 18] }],
    ["path", { d: "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }, { r: "grow", d: 0.06, o: [12, 12] }],
    ["path", { d: "M14 8h4" }, { r: "growX", d: 0.28, o: [16, 8] }],
    ["path", { d: "M14 18h4" }, { r: "growX", d: 0.32, o: [16, 18] }],
    ["path", { d: "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }, { r: "grow", d: 0.12, o: [20, 12] }],
  ],
});
