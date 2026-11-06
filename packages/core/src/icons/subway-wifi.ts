import { icon } from "../icon.js";

export const SubwayWifi = icon("SubwayWifi", "subway-wifi", {
  nodes: [
    ["rect", { width: "14", height: "10", x: "5", y: "10", rx: "2" }, { r: "bounce", y: -1, a: 1, o: [12, 15] }],
    ["path", { d: "M5 15h14" }, { r: "bounce", y: -1, a: 1, o: [12, 15] }],
    ["path", { d: "M12 10v5" }, { r: "bounce", y: -1, a: 1, o: [12, 15] }],
    ["path", { d: "M8.5 17.5h.01" }, { r: "flicker", d: 0.1, o: [12, 17.5] }],
    ["path", { d: "M15.5 17.5h.01" }, { r: "flicker", d: 0.16, o: [12, 17.5] }],
    ["path", { d: "m8 20-2 2" }],
    ["path", { d: "m16 20 2 2" }],
    ["path", { d: "M9.5 7a4 4 0 0 1 5 0" }, { r: "draw", d: 0.1, o: [12, 9] }],
    ["path", { d: "M7 4a8 8 0 0 1 10 0" }, { r: "draw", d: 0.22, o: [12, 9] }],
  ],
});
