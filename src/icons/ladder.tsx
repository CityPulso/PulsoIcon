import { createIcon } from "../runtime/createIcon.js";

export const Ladder = createIcon("Ladder", "ladder", {
  nodes: [
    ["path", { d: "M7 2v20" }, { r: "fade", o: [7, 12] }],
    ["path", { d: "M17 2v20" }, { r: "fade", o: [17, 12] }],
    ["path", { d: "M7 6h10" }, { r: "growX", d: 0.2, o: [7, 6] }],
    ["path", { d: "M7 10h10" }, { r: "growX", d: 0.14, o: [7, 10] }],
    ["path", { d: "M7 14h10" }, { r: "growX", d: 0.08, o: [7, 14] }],
    ["path", { d: "M7 18h10" }, { r: "growX", d: 0.02, o: [7, 18] }],
  ],
});
