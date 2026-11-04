import { createIcon } from "../runtime/createIcon.js";

export const Earth = createIcon("Earth", "earth", {
  nodes: [
    ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54" }, { r: "spin", a: -60, o: [12, 12] }],
    ["path", { d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" }, { r: "spin", a: -60, o: [12, 12] }],
    ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }, { r: "spin", a: -60, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
