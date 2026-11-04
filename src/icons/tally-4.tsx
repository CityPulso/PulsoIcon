import { createIcon } from "../runtime/createIcon.js";

export const Tally4 = createIcon("Tally4", "tally-4", {
  nodes: [
    ["path", { d: "M4 4v16" }, { r: "grow", o: [4, 20] }],
    ["path", { d: "M9 4v16" }, { r: "grow", d: 0.06, o: [9, 20] }],
    ["path", { d: "M14 4v16" }, { r: "grow", d: 0.12, o: [14, 20] }],
    ["path", { d: "M19 4v16" }, { r: "grow", d: 0.18, o: [19, 20] }],
  ],
});
