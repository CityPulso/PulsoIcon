import { createIcon } from "../runtime/createIcon.js";

export const TaxiWifi = createIcon("TaxiWifi", "taxi-wifi", {
  nodes: [
    ["path", { d: "M10.5 8.5h3" }, { r: "lift", d: 0.05, o: [12, 8.5] }],
    ["path", { d: "m21 12-2 2-1.2-2.8A2 2 0 0 0 16 10H8a2 2 0 0 0-1.8 1.2L5 14l-2-2" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["rect", { width: "18", height: "6", x: "3", y: "14", rx: "2" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "M7 17h.01" }, { r: "flicker", d: 0.15, o: [12, 17] }],
    ["path", { d: "M17 17h.01" }, { r: "flicker", d: 0.21, o: [12, 17] }],
    ["path", { d: "M5 20v2" }],
    ["path", { d: "M19 20v2" }],
    ["path", { d: "M10 5.5a3 3 0 0 1 4 0" }, { r: "draw", d: 0.1, o: [12, 8] }],
    ["path", { d: "M8 3a6 6 0 0 1 8 0" }, { r: "draw", d: 0.22, o: [12, 8] }],
  ],
});
