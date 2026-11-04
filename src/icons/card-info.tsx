import { createIcon } from "../runtime/createIcon.js";

export const CardInfo = createIcon("CardInfo", "card-info", {
  nodes: [
    ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M7 9h.01" }, { r: "pop", d: 0.1, o: [7, 9] }],
    ["path", { d: "M7 12v4" }, { r: "draw", d: 0.15, o: [7, 14] }],
    ["path", { d: "M11 10h7" }, { r: "growX", d: 0.25, o: [11, 10] }],
    ["path", { d: "M11 14h5" }, { r: "growX", d: 0.3, o: [11, 14] }],
  ],
});
