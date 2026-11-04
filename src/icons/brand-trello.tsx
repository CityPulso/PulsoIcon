import { createIcon } from "../runtime/createIcon.js";

export const BrandTrello = createIcon("BrandTrello", "brand-trello", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["rect", { x: "6.5", y: "6.5", width: "4", height: "10", rx: "1" }, { r: "grow", d: 0.05, o: [8.5, 6.5] }],
    ["rect", { x: "13.5", y: "6.5", width: "4", height: "6", rx: "1" }, { r: "grow", d: 0.15, o: [15.5, 6.5] }],
  ],
});
