import { icon } from "../icon.js";

export const BusWifi = icon("BusWifi", "bus-wifi", {
  nodes: [
    ["rect", { width: "16", height: "9", x: "4", y: "10", rx: "2" }, { r: "press", a: 0.04, o: [12, 19] }],
    ["path", { d: "M4 14h16" }, { r: "press", a: 0.04, o: [12, 19] }],
    ["path", { d: "M4 12 2 13" }, { r: "fade", d: 0.15, o: [12, 14] }],
    ["path", { d: "m22 13-2-1" }, { r: "fade", d: 0.15, o: [12, 14] }],
    ["path", { d: "M8 16.5h.01" }, { r: "pop", d: 0.1, o: [8.005, 16.5] }],
    ["path", { d: "M16 16.5h.01" }, { r: "pop", d: 0.1, o: [16.005, 16.5] }],
    ["path", { d: "M7 19v2" }],
    ["path", { d: "M17 19v2" }],
    ["path", { d: "M9.5 7a4 4 0 0 1 5 0" }, { r: "draw", d: 0.1, o: [12, 9] }],
    ["path", { d: "M7 4a8 8 0 0 1 10 0" }, { r: "draw", d: 0.22, o: [12, 9] }],
  ],
});
