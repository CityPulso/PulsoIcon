import { icon } from "../icon.js";

export const WifiLock = icon("WifiLock", "wifi-lock", {
  nodes: [
    ["path", { d: "M2 8.82a15 15 0 0120 0" }, { r: "draw", d: 0.16, o: [12, 6.91] }],
    ["path", { d: "M20 16v-2a2 2 0 00-4 0v2" }, { r: "lift", d: 0.2, o: [18, 14] }],
    ["path", { d: "M5 12.859a10 10 0 018.436-2.756" }, { r: "draw", d: 0.08, o: [9.218, 11.429] }],
    ["path", { d: "M8.5 16.429a5 5 0 011.794-1.13" }, { r: "pop", o: [9.397, 15.864] }],
    ["rect", { x: "14", y: "16", width: "8", height: "5", rx: "1" }, { r: "shake", d: 0.25, a: 0.8, o: [18, 18.5] }],
  ],
});
