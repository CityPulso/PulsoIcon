import { createIcon } from "../runtime/createIcon.js";

export const Sandals = createIcon("Sandals", "sandals", {
  nodes: [
    ["rect", { x: "3", y: "2", width: "7", height: "17", rx: "3.5" }, { r: "bounce", y: -1, a: 1.5, o: [6.5, 10.5] }],
    ["path", { d: "M3.2 10 6.5 6l3.3 4" }, { r: "bounce", y: -1, a: 1.5, o: [6.5, 10.5] }],
    ["rect", { x: "14", y: "5", width: "7", height: "17", rx: "3.5" }, { r: "bounce", d: 0.25, y: -1, a: 1.5, o: [17.5, 13.5] }],
    ["path", { d: "M14.2 13l3.3-4 3.3 4" }, { r: "bounce", d: 0.25, y: -1, a: 1.5, o: [17.5, 13.5] }],
  ],
});
