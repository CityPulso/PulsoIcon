import { icon } from "../icon.js";

export const Battery = icon("Battery", "battery", {
  nodes: [
    ["path", { d: "M 22 14 L 22 10" }, { r: "flicker", d: 0.1, o: [22, 12] }],
    ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2" }, { r: "pulse", a: 0.06, o: [10, 12] }],
  ],
});
