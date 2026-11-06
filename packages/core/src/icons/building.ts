import { icon } from "../icon.js";

export const Building = icon("Building", "building", {
  nodes: [
    ["path", { d: "M12 10h.01" }, { r: "flicker", o: [12.005, 10] }],
    ["path", { d: "M12 14h.01" }, { r: "flicker", d: 0.03, o: [12.005, 10] }],
    ["path", { d: "M12 6h.01" }, { r: "flicker", d: 0.06, o: [12.005, 10] }],
    ["path", { d: "M16 10h.01" }, { r: "flicker", d: 0.09, o: [12.005, 10] }],
    ["path", { d: "M16 14h.01" }, { r: "flicker", d: 0.12, o: [12.005, 10] }],
    ["path", { d: "M16 6h.01" }, { r: "flicker", d: 0.15, o: [12.005, 10] }],
    ["path", { d: "M8 10h.01" }, { r: "flicker", d: 0.18, o: [12.005, 10] }],
    ["path", { d: "M8 14h.01" }, { r: "flicker", d: 0.21, o: [12.005, 10] }],
    ["path", { d: "M8 6h.01" }, { r: "flicker", d: 0.24, o: [12.005, 10] }],
    ["path", { d: "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" }, { r: "grow", d: 0.2, o: [12, 22] }],
    ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }, { r: "press", a: 0.04, o: [12, 22] }],
  ],
});
