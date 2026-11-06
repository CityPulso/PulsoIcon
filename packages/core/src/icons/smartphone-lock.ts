import { icon } from "../icon.js";

export const SmartphoneLock = icon("SmartphoneLock", "smartphone-lock", {
  nodes: [
    ["path", { d: "M12 21H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M11 18h.01" }, { r: "flicker", d: 0.1, o: [11, 18] }],
    ["rect", { x: "14", y: "16", width: "8", height: "6", rx: "1" }, { r: "shake", d: 0.15, a: 0.6, o: [18, 19] }],
    ["path", { d: "M16 16v-2a2 2 0 0 1 4 0v2" }, { r: "lift", d: 0.1, y: -1, a: 0, o: [18, 16] }],
  ],
});
