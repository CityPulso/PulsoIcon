import { icon } from "../icon.js";

export const Rfid = icon("Rfid", "rfid", {
  nodes: [
    ["rect", { x: "2", y: "5", width: "14", height: "14", rx: "2" }, { r: "press", a: 0.04, o: [9, 12] }],
    ["rect", { x: "6", y: "9", width: "6", height: "6", rx: "1" }, { r: "pulse", d: 0.05, a: 0.1, o: [9, 12] }],
    ["path", { d: "M18.5 9.5a3.5 3.5 0 0 1 0 5" }, { r: "draw", d: 0.1, o: [19.5, 12] }],
    ["path", { d: "M20 7a7.5 7.5 0 0 1 0 10" }, { r: "draw", d: 0.22, o: [22, 12] }],
  ],
});
