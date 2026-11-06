import { icon } from "../icon.js";

export const Heater = icon("Heater", "heater", {
  nodes: [
    ["path", { d: "M11 8c2-3-2-3 0-6" }, { r: "float", a: 1.5, o: [13.25, 5] }],
    ["path", { d: "M15.5 8c2-3-2-3 0-6" }, { r: "float", d: 0.1, a: 1.5, o: [13.25, 5] }],
    ["path", { d: "M6 10h.01" }, { r: "flicker", d: 0.2, o: [6.005, 12] }],
    ["path", { d: "M6 14h.01" }, { r: "flicker", d: 0.26, o: [6.005, 12] }],
    ["path", { d: "M10 16v-4" }, { r: "grow", d: 0.1, o: [10, 14] }],
    ["path", { d: "M14 16v-4" }, { r: "grow", d: 0.16, o: [14, 14] }],
    ["path", { d: "M18 16v-4" }, { r: "grow", d: 0.22, o: [18, 14] }],
    ["path", { d: "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" }, { r: "press", a: 0.04, o: [12, 13] }],
    ["path", { d: "M5 20v2" }, { r: "fade", o: [12, 21] }],
    ["path", { d: "M19 20v2" }, { r: "fade", o: [12, 21] }],
  ],
});
