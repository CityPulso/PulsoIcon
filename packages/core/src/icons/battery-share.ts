import { icon } from "../icon.js";

export const BatteryShare = icon("BatteryShare", "battery-share", {
  nodes: [
    ["rect", { width: "10", height: "16", x: "3", y: "5", rx: "2" }, { r: "pulse", a: 0.05, o: [8, 13] }],
    ["path", { d: "M6.5 2h3" }, { r: "flicker", d: 0.1, o: [8, 2] }],
    ["path", { d: "M16 13h6" }, { r: "draw", d: 0.1 }],
    ["path", { d: "m19 10 3 3-3 3" }, { r: "slide", d: 0.1, x: 1, a: 1, o: [20.5, 13] }],
  ],
});
