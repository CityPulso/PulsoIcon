import { createIcon } from "../runtime/createIcon.js";

export const RailSymbol = createIcon("RailSymbol", "rail-symbol", {
  nodes: [
    ["path", { d: "M5 15h14" }, { r: "growX", d: 0.1, o: [12, 15] }],
    ["path", { d: "M5 9h14" }, { r: "growX", o: [12, 9] }],
    ["path", { d: "m14 20-5-5 6-6-5-5" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
