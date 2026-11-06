import { icon } from "../icon.js";

export const BluetoothConnected = icon("BluetoothConnected", "bluetooth-connected", {
  nodes: [
    ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["line", { x1: "18", x2: "21", y1: "12", y2: "12" }, { r: "slide", d: 0.05, x: 1, a: 1.5, o: [19.5, 12] }],
    ["line", { x1: "3", x2: "6", y1: "12", y2: "12" }, { r: "slide", d: 0.05, x: -1, a: 1.5, o: [4.5, 12] }],
  ],
});
