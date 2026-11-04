import { createIcon } from "../runtime/createIcon.js";

export const InspectionPanel = createIcon("InspectionPanel", "inspection-panel", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 7h.01" }, { r: "spin", d: 0.05, a: 180, o: [7.005, 7] }],
    ["path", { d: "M17 7h.01" }, { r: "spin", d: 0.11, a: 180, o: [17.005, 7] }],
    ["path", { d: "M7 17h.01" }, { r: "spin", d: 0.17, a: 180, o: [7.005, 17] }],
    ["path", { d: "M17 17h.01" }, { r: "spin", d: 0.23, a: 180, o: [17.005, 17] }],
  ],
});
