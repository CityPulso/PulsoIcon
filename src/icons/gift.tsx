import { createIcon } from "../runtime/createIcon.js";

export const Gift = createIcon("Gift", "gift", {
  nodes: [
    ["path", { d: "M12 7v14" }, { r: "press", d: 0.1, a: 0.05, o: [12, 21] }],
    ["path", { d: "M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }, { r: "press", d: 0.1, a: 0.05, o: [12, 21] }],
    ["path", { d: "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" }, { r: "lift", o: [12, 4.5] }],
    ["rect", { x: "3", y: "7", width: "18", height: "4", rx: "1" }, { r: "lift", d: 0.05, o: [12, 9] }],
  ],
});
