import { icon } from "../icon.js";

export const RadioReceiver = icon("RadioReceiver", "radio-receiver", {
  nodes: [
    ["path", { d: "M5 16v2" }, { r: "fade", o: [12, 17] }],
    ["path", { d: "M19 16v2" }, { r: "fade", o: [12, 17] }],
    ["rect", { width: "20", height: "8", x: "2", y: "8", rx: "2" }, { r: "shake", a: 0.6, o: [12, 12] }],
    ["path", { d: "M18 12h.01" }, { r: "flicker", d: 0.1, o: [18.005, 12] }],
  ],
});
