import { createIcon } from "../runtime/createIcon.js";

export const CreditCard = createIcon("CreditCard", "credit-card", {
  nodes: [
    ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }, { r: "flip", o: [12, 12] }],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M6 14h2" }, { r: "flip", o: [12, 12] }],
  ],
});
