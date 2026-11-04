import { createIcon } from "../runtime/createIcon.js";

export const DeviceSimExclamation = createIcon("DeviceSimExclamation", "device-sim-exclamation", {
  nodes: [
    ["path", { d: "M13 21H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8.5L19 7.5V13" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["rect", { x: "8", y: "10", width: "6", height: "7", rx: "1" }, { r: "pulse", d: 0.05, a: 0.1, o: [11, 13.5] }],
    ["path", { d: "M19 16v3" }, { r: "shake", d: 0.2, a: 1, o: [19, 19] }],
    ["path", { d: "M19 22h.01" }, { r: "pop", d: 0.35, o: [19, 22] }],
  ],
});
